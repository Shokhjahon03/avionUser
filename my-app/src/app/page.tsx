'use client'

import Hero from "@/components/Hero";
import LoginP from "@/components/LoginP";
import MainHome from "@/components/MainHome";
import Navbar from "@/components/Navbar";
import allDatas from "@/store/store";
import Image from "next/image";

export default function Home() {
  let {torf}=allDatas()
  return (
   <>
    {
      torf ? <>
      <Navbar/>
    <Hero/>
    <MainHome/></>:<LoginP/>
    }
   </>
  );
}
