'use client'

import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '@/firebase';
import Image from 'next/image';

const Qrcode = ({ userId }: {userId: string}) => {
  const id = userId
  const [qrCodeImageURL, setQrCodeImageURL] = useState<string | null>(null);

  useEffect(() => {
    const fetchQrCodeImage = async () => {
      try {
        const storageRef = ref(storage, `qr_codes/${id}.jpg`);
        const downloadURL = await getDownloadURL(storageRef);
        setQrCodeImageURL(downloadURL);
      } catch (e) {
        console.log("Failed to show QR Code image:", e)
      }
    };

    fetchQrCodeImage();
  }, [id]);

  return (
    <div>
      {qrCodeImageURL ? (
        <Image
        src={qrCodeImageURL} 
        alt="QR Code" 
        width={200}
        height={200}
        />
      ) : (
        <p>Loading QR Code ...</p>
      )}      
    </div>
  )
}

export default Qrcode
