'use client'
import allDatas from "@/store/store"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {
  let [c,setC]=useState(0)
  let [z,setZ]=useState(true)
  let func=async()=>{
      let r=await axios.get('https://65f258c5034bdbecc7649f36.mockapi.io/app/local')
      let d=await r.data
      setC(d.length)
  }
  useEffect(()=>{
    func()
  },[c])
  return (
    <>
     <nav className="md:mb-[25px] relative">
       <div className="container md:pl-[20px] md:pr-[20px]">
        <div className="navbar w-full h-[69px] flex  items-center justify-between pl-[24px] pr-[20px] md:border-b">
          <button className="hidden md:block"><i className='bx bx-search'></i></button>
            <p className="text-[#686098] text-[24px] leading-[29.52px] font-normal">Avion</p>
            <div className="w-[52px]  flex justify-between items-center relative">
              <div className="hidden lg:flex w-[215px] absolute top-0 left-[-260px] justify-between text-[16px] text-[#726E8D]">
                <Link href='/aboute'>About us</Link>
                <Link href='/as'>Contact</Link>
                <Link href='/blog'>Blog</Link>
              </div>
           <button  className="md:hidden"><i className='bx bx-search md:hidden'></i></button>
           <Link href='/cart' className="hidden md:block relative"><i className='bx bx-cart-alt'></i><p className="bg-[] z-20 text-white absolute top-[-7px] text-[10px] left-[-5px]">{c}</p><i className=' absolute top-[-10px] left-[-12px] text-[20px] z-10 text-blue-500 bx bxs-bell'  ></i></Link>
            <button onClick={()=>setZ(!z)} className="md:hidden"><i className='bx bx-menu' ></i></button>
            <button className="hidden md:block"><i className='bx bx-user-circle'></i></button>
            </div>
        </div>
        </div>


        <div className={z?'left md:hidden':'right md:hidden'}>
          <Link href='/'>Home</Link>
          <Link href='/aboute'>Aboute</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/cart'>Cart</Link>
          </div>


    </nav> 
    <div className="w-full">
    <div className="container">
      <div className="hidden w-full md:flex justify-center items-center">
        <div className=" max-w-[803px] w-full flex justify-between mb-[89px] text-[16px] leading-[21.6px] font-normal text-[#726E8D]">
          <button>Plant pots</button>
          <button>Ceramics</button>
          <button>Tables</button>
          <button>Chairs</button>
          <button>Crockery</button>
          <button>Tableware</button>
          <button>Cutlery</button>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Navbar
