'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import { Label, Radio } from 'flowbite-react';
import allDatas from '@/store/store';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
const page = () => {

let {loading,datas,getDatas,getIddata}=allDatas()
let [arr,setArr]=useState<number>(6)
let [filt,setFilt]=useState<any>('')
let [filters,setFil]=useState<any>([])
let getval=async()=>{
    let x=await axios.get('https://65f258c5034bdbecc7649f36.mockapi.io/app/products')
    let y=await x.data
    return y
}
let func=()=>{
    setArr(arr+1)
    getDatas()
}
let filter=()=>{
    if (filt!=='') {
        let newarr=datas.filter((e:any)=>e.category.includes(filt))
        setFil(newarr)
    }
}
useEffect(()=>{
    filter()
    console.log(filt);
    
},[filt])

useEffect(()=>{
    getDatas()
  },[arr])

  return (
    <>
     <Navbar/>
     <div className="heros">
        <div className="container">
            <div className='blog h-[146px] lg:h-[209px] w-full pt-[64px] pb-[32px] lg:pt-[123px] lg:pb-[36px]'>
                    <p className='text-white text-[36px] font-normal text-center lg:text-start'>
                    All products
                    </p>
            </div>
        </div>
        </div> 
        <main className='w-full'>
            <section className=' relative'>
                <div className="container2">

                    <div className='w-full flex justify-between flex-wrap lg:flex-nowrap relative'>

                                <div className='w-full flex justify-between pt-[20px] pb-[20px] md:hidden'>
                                        <button className='flex justify-center gap-[12px] bg-[#F9F9F9] items-center w-[163px] h-[56px]'>
                                        <p>Filters</p>
                                        <i className='bx bxs-down-arrow'></i>
                                    </button>
                                    <button className='flex justify-center gap-[12px] bg-[#F9F9F9] items-center w-[163px] h-[56px]'>
                                        <p>Sorting</p>
                                        <i className='bx bxs-down-arrow'></i>
                                    </button>
                                </div>


                        <div className='hidden lg:block left-0 w-[385px] h-dvh'>
                                <form className='flex flex-col gap-y-[48px] pt-[48px]'>
                                    <div>
                                        <p className='mb-[20px]'>Product type</p>
                                         <fieldset className="flex max-w-md flex-col gap-4">
                                        <div className="flex items-center gap-2">
                                            <Radio onChange={(e)=>setFilt(e.target.value)} className=' rounded cursor-pointer' id="united-state" name="countries" value="furniture" defaultChecked />
                                            <label htmlFor="united-state">Furniture</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Radio onChange={(e)=>setFilt(e.target.value)} className=' rounded cursor-pointer' id="germany" name="countries" value="homeware" />
                                            <Label htmlFor="germany">Homeware</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Radio onChange={(e)=>setFilt(e.target.value)} className=' rounded cursor-pointer' id="spain" name="countries" value="sofas" />
                                            <Label htmlFor="spain">Sofas</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Radio onChange={(e)=>setFilt(e.target.value)} className=' rounded cursor-pointer' id="uk" name="countries" value="Light fittings" />
                                            <Label htmlFor="uk">Light fittings</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Radio onChange={(e)=>setFilt(e.target.value)} className=' rounded cursor-pointer' id="china" name="countries" value="accessories" disabled />
                                            <Label htmlFor="china" disabled>
                                            Accessories
                                            </Label>
                                        </div>
                                        </fieldset>
                                    </div>
                                    <div className=''>
                                        <p className='mb-[20px]'>Price</p>
                                    <fieldset className="flex max-w-md flex-col gap-4">
                                        <div className="flex items-center gap-2">
                                            <Radio className=' rounded cursor-pointer' id="united-state" name="countries" value="furniture" defaultChecked />
                                            <label htmlFor="united-state">1-100</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Radio id="germany" name="countries" value="homeware" />
                                            <Label htmlFor="germany">Homeware</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Radio id="spain" name="countries" value="sofas" />
                                            <Label htmlFor="spain">Sofas</Label>
                                        </div>
                                        </fieldset>
                                    </div>
                                </form>
                        </div>


                                
                        <div className='w-full lg:hidden pl-[24px] lg:pl-[20px] pr-[24px] lg:pr-[20px] pt-[28px] lg:pt-[36px] flex flex-wrap justify-center gap-x-[16px] lg:gap-x-[22px] lg:gap-y-[36px] gap-y-[20px]'>

                        
                           {
                            filt ? <>
                            
                             {
                                filters.map((e:{image:string,name:string,price:number,category:string,description:string,id:number},i:number)=>(
                                    <Link href='/drout' onClick={()=>getIddata(e.id)} key={i}>
                                        <img className='w-[163px] lg:w-[305px] lg:h-[375px] h-[201px]' alt='s' src={e.image}/>
                                        <p className='text-[20px] mt-[24px] mb-[8px]'>{e.name}</p>
                                        <p className='text-[18px]'>{e.price}</p>
                                    </Link>
                                ))
                            }
                            </>:<>
                            {/* {
                                datas.slice(0,6).map((e:{image:string,name:string,price:number,category:string,description:string,id:number},i:number)=>(
                                    <Link href='/drout' onClick={()=>getIddata(e.id)} key={i}>
                                        <img className='w-[163px] lg:w-[305px] lg:h-[375px] h-[201px]' alt='s' src={e.image}/>
                                        <p className='text-[20px] mt-[24px] mb-[8px]'>{e.name}</p>
                                        <p className='text-[18px]'>{e.price}</p>
                                    </Link>
                                ))
                            } */}
                            null
                            </>
                           }
                       

                        </div>

                        <div className=' hidden lg:flex w-full  pl-[24px] lg:pl-[20px] pr-[24px] lg:pr-[20px] pt-[28px] lg:pt-[36px] flex-wrap justify-center gap-x-[16px] lg:gap-x-[22px] lg:gap-y-[36px] gap-y-[20px]'>

                        
                           {
                                datas.slice(0,9).map((e:{image:string,name:string,price:number,category:string,description:string,id:number},i:number)=>(
                                    <Link href='/drout' onClick={()=>getIddata(e.id)} key={i}>
                                        <img className='w-[163px] lg:w-[305px] lg:h-[375px] h-[201px]' alt='s' src={e.image}/>
                                        <p className='text-[20px] mt-[24px] mb-[8px]'>{e.name}</p>
                                        <p className='text-[18px]'>{e.price}</p>
                                    </Link>
                                ))
                            }
                       

                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    </>
  )
}

export default page
