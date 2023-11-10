import Hero from "@/components/Hero";
import QrPDF from "@/components/QrPDF";
import Qrimage from "@/components/Qrimage";
import Qrlink from "@/components/Qrlink";
import Qrmusic from "@/components/Qrmusic";
import Qrtext from "@/components/Qrtext";
import Qrwifi from "@/components/Qrwifi";

export default function Home() {
  return (
    <>
      <Hero />
      <Qrlink />
      <Qrwifi />
      <QrPDF />
      <Qrimage />
      <Qrtext />
      <Qrmusic />
    </>
  )
}
