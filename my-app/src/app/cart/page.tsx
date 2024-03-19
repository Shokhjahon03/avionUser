'use client'
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Addd from "@/components/addd"
import allDatas from "@/store/store"
import { useEffect, useState } from "react"

const page = () => {
  let {cart,getprod}=allDatas()
  let [all,setAll]=useState<number>(0)
  useEffect(()=>{
    getprod()
    cart.map((e:any)=>setAll(all+(e.soni*250)))
  },[])

  let f=():number=>{
  return cart.map((e:any)=>setAll(all+(e.soni*250)))
  }
useEffect(()=>{
  cart.map((e:any)=>setAll(all+(e.soni*250)))
},[])
  return (
    <>
     <Navbar/> 
     <header className="bg-[#F9F9F9] pb-[48px]">
     <div className="container">
        <div className="w-full pt-[36px]">
            <p className="mb-[40px]">Your shopping cart</p>
            <div className="border-b w-full pb-[12px] flex justify-between">
              <p>Product</p>
              <div className="w-[408px] flex justify-between">
                <p>Quantity</p>
                <p>Total</p>
              </div>
            </div>
              {
                cart.map((e:{name:string,image:string,price:number,category:string,description:string,id:number,soni:number},i:number)=>(
                 <Addd key={i} e={e} all={all} setAll={setAll}/>
                //  {setAll(all+(e.soni*250))}
                ))
              }
              <div className="w-full flex justify-end">
              <div className=" items-end flex flex-col">
                  <div className="flex w-[150px] justify-between items-center mb-[15px]">
                    <p>Subtotal</p>
                    <p className="text-[24px]">£{all}</p>
                  </div>
                  <p className="text-[14px] mb-[8px]">Taxes and shipping are calculated at checkout</p>
                  <button className="w-[172px] h-[56px] bg-[#2A254B] text-white">
                  Go to checkout
                  </button>
              </div>
              </div>
        </div>
        </div>  
     </header>
     <Footer/>
    </>
  )
}

export default page
