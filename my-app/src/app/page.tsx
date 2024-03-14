import Hero from "@/components/Hero";
import MainHome from "@/components/MainHome";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <Navbar/>
    <Hero/>
    <MainHome/>
   </>
  );
}
