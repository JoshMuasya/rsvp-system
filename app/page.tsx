import Picture from '@/components/Picture'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Picture />
    </main>
  )
}
