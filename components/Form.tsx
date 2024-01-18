"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import { db, storage } from "@/firebase"

import { useState } from 'react';
import QRCode from 'qrcode';
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { Fascinate_Inline } from "next/font/google"
import { Loader2 } from "lucide-react" 

const FormSchema = z.object({
  name: z.string({
    required_error: "Name is required"
  }),
  email: z.string({
    required_error: "Email is required"
  }).email({
    message: "Invalid email address"
  }),
  phonenumber: z.string({
    required_error: "PhoneNumber is required"
  }),
  amount: z.coerce.number().refine((value) => value >= 0, {
    message: "Amount must be a non-negative number"
  }),
  isAttended: z.boolean()
})

export function RsvpForm() {
  const [qrCodeData, setQrCodeData] = useState('');
  const [qrCodeImage, setQrCodeImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phonenumber: "",
      amount: 0,
      isAttended: false,
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)

    try {
      const userData = await addDoc(collection(db, 'visitors'), data);

      setIsLoading(true);

      setQrCodeData(userData.id);

      const qrCodeImageURL = await generateQRCodeImage(userData.id);
      setQrCodeImage(qrCodeImageURL);

      await updateDoc(doc(db, "visitors", userData.id), { qrCodeImageURL });

      const userId = userData.id

      router.push(`/qrcode/${userId}`)
    } catch (e) {
      console.error('Error Adding User:', e)
    }
  }

  const generateQRCodeImage = async (data: string) => {
    try {
      const canvas = document.createElement("canvas");
      await (QRCode as any).toCanvas(canvas, data, { width: 200, height:200 });

      const dataUrl = canvas.toDataURL("image/jpeg");

      const storageRef = ref(storage, `qr_codes/${data}.jpg`);
      await uploadString(storageRef, dataUrl, "data_url")

      const downloadURL = await getDownloadURL(storageRef);

      return downloadURL;
    } catch (e) {
      console.error('Error generating QR Code', e)
      return null;
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phonenumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phonenumber</FormLabel>
              <FormControl>
                <Input placeholder="Phonenumber" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input
                  placeholder="Amount" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* {qrCodeData && (
          <div className="text-center">
            <QRCode value={qrCodeData} />
            <p>Scan this QR code to mark attendance</p>
          </div>
        )} */}

        {isLoading ? (
          <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
        ): (
          <Button type="submit">Submit</Button>
        )}
      </form>
    </Form>
  )
}
