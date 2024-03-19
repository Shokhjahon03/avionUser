'use client'


import Navbar from '@/components/Navbar'
import allDatas from '@/store/store'
import React, { useEffect, useState } from 'react'
import photo1 from '../../imgs/Photo1.png'
import photo2 from '../../imgs/Photo2.png'
import photo3 from '../../imgs/Photo3.png'
import photo4 from '../../imgs/Photo.png'
import Image from 'next/image'
import carimg from '../../imgs/Delivery.svg'
import pur from '../../imgs/Purchase.svg'
import sprut from '../../imgs/Sprout.svg'
import Footer from '@/components/Footer'
type al={
    cart:null | string
}
const page = () => {
    let [c,setC]=useState(1)
    let {iddata,datas,getDatas}=allDatas()

    
  
    useEffect(()=>{
        getDatas()
    },[])
  return (
    <>
     <Navbar/>
        <div className="her">
            <div className="container2">
            <div className='w-full flex justify-between flex-wrap'>
                <img className='w-[390px] h-[380px] lg:w-[721px] lg:h-[759px]' src={iddata.image} alt="" />
                     <div className='pl-[24px]'>
                            <div className=' mb-[28px]'>
                                <p className='text-[24px] mb-[12px]'>{iddata.name}</p>
                                <p className='text-[20px]'>{iddata.price}</p>
                            </div>
                            <div className=''>
                                <p className='mb-[12px]'>Product description</p>
                                <p className='mb-[12px] lg:w-[498px]'>{iddata.description}</p>
                                <div>
                                <div className='flex items-center gap-[10px] pl-[10px]'>
                                <i className='text-[5px] bx bxs-circle'></i><p>Premium material</p>
                                </div>
                                <div className='flex items-center gap-[10px] pl-[10px]'>
                                <i className='text-[5px] bx bxs-circle'></i><p>Premium material</p>
                                </div>
                                <div className='flex items-center gap-[10px] pl-[10px]'>
                                <i className='text-[5px] bx bxs-circle'></i><p>Premium material</p>
                                </div>
                                </div>
                            </div>
                            <div className='mt-[28px]'>
                                <p className='mb-[16px] text-[16px]'>Dimensions</p>
                                <div className='flex w-[342px] h-[56px] justify-between items-center'>
                                    <div className='h-full flex flex-col justify-between'>
                                        <p>Height</p>
                                        <p>110cm</p>
                                    </div>
                                    <span className='h-[44px] border'></span>
                                    <div className='h-full flex flex-col justify-between'>
                                    <p>Width</p>
                                        <p>75cm</p>
                                    </div>
                                    <span className='h-[44px] border'></span>
                                    <div className='h-full flex flex-col justify-between'>
                                    <p>Depth</p>
                                        <p>50cm</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='mt-[32px]'>
                                    <p className='mb-[12px]'>Quantitity</p>
                                    <div className='w-[342px] h-[46px] bg-[#F9F9F9] flex items-center justify-center gap-[33px]'>
                                        <button onClick={()=>{
                                            if(c>0){
                                                setC(c-1)
                                            }
                                        }} className='text-[16px] text-[#CAC6DA]'>-</button>
                                        <p>{c}</p>
                                        <button onClick={()=>setC(c+1)} className='text-[16px] text-[#CAC6DA]'>+</button>
                                    </div>
                                </div>
                                <button  className='w-[342px] h-[56px] mt-[16px] text-white bg-[#2A254B]'>
                                Add to cart
                                </button>
                            </div>
                        </div>

                </div>
            </div>
        </div>
        <section className='pt-[48px] w-full'>
       <div className="container">
        <div className='w-full'>
        <p className=' pl-[26px] text-[#2A254B] mb-[36px] lg:text-[32px] lg:pl-[80px]'>New ceramics</p>

          <div className='w-full flex justify-center gap-x-[16px] gap-y-[20px] flex-wrap'>
          <div>
            <Image className='mb-[24px] lg:w-[305px] lg:h-[375px]' src={photo1} width={163} height={288} alt='alt'  />
            <p className='mb-[8px] lg:text-[20px]'>Rustic Vase Set</p>
            <p className='lg:text-[18px]'>£250</p>
          </div>
          <div>
            <Image className='mb-[24px] lg:w-[305px] lg:h-[375px]' src={photo2} width={163} height={288} alt='alt'  />
            <p className='mb-[8px] lg:text-[20px]'>The Dandy chair</p>
            <p className='lg:text-[18px]'>£399</p>
          </div>
          <div>
            <Image className='mb-[24px] lg:w-[305px] lg:h-[375px]' src={photo3} width={163} height={288} alt='alt'  />
            <p className='mb-[8px] lg:text-[20px]'>The Silky Vase</p>
            <p className='lg:text-[18px]'>£125</p>
          </div>
          <div>
            <Image className='mb-[24px] lg:w-[305px] lg:h-[375px]' src={photo4} width={163} height={288} alt='alt'  />
            <p className='mb-[8px] lg:text-[20px]'>The Dandy chair</p>
            <p className='lg:text-[18px]'>£250</p>
          </div>
          </div>
          <div className='w-full flex justify-center'>
          <button className=' mt-[29px] mb-[38px] w-[342px] h-[56px] bg-[#F9F9F9] text-[#2A254B] text-[16px] leading-[24px] font-normal md:w-[170px] md:h-[56px]'>
          View collection
          </button>
          </div>
        </div>
        </div>
      </section>
      <section>
      <div className="container">
        <div className="w-full pt-[48px] pl-[24px] pr-[24px]">
          <p className='text-[20px] leading-[28px] font-normal text-[#2A254B] mb-[36px] md:mb-[51px] md:text-center'>What makes our brand <br className='md:hidden' /> different</p>
          <div className="flex flex-wrap justify-center gap-[59px] pb-[45px]">
            <div className="flex flex-col items-start max-w-[342px] md:max-w-[270px] w-full">
              <Image width={24} height={24} alt='alt' src={carimg} className='mb-[16px]'/>
              <p className='mb-[12px] text-[16px] leading-[22.4px]  text-[#2A254B]  font-normal'>Next day as standard</p>
              <p className='text-[14px] leading-[21px] font-normal text-[#2A254B]'>Order before 3pm and get your order the next day as standard</p>
            </div>
            <div className="flex flex-col items-start max-w-[342px] md:max-w-[270px] w-full">
            <i className='bx bx-check-circle text-[#2A254B] mb-[16px] text-[22px]'></i>
              <p className='mb-[12px] text-[16px] leading-[22.4px]  text-[#2A254B]  font-normal'>Made by true artisans</p>
              <p className='text-[14px] leading-[21px] font-normal text-[#2A254B]'>Handmade crafted goods made with
real passion and craftmanship</p>
            </div>
            <div className="flex flex-col items-start max-w-[342px] md:max-w-[270px] w-full">
              <Image width={24} height={24} alt='alt' src={pur} className='mb-[16px]'/>
              <p className='mb-[12px] text-[16px] leading-[22.4px]  text-[#2A254B]  font-normal'>Unbeatable prices</p>
              <p className='text-[14px] leading-[21px] font-normal text-[#2A254B]'>For our materials and quality you won’t find better prices anywhere</p>
            </div>
            <div className="flex flex-col items-start max-w-[342px] md:max-w-[270px] w-full">
              <Image width={24} height={24} alt='alt' src={sprut} className='mb-[16px]'/>
              <p className='mb-[12px] text-[16px] leading-[22.4px]  text-[#2A254B]  font-normal'>Recycled packaging</p>
              <p className='text-[14px] leading-[21px] font-normal text-[#2A254B]'>We use 100% recycled packaging to ensure our footprint is manageable</p>
            </div>
          </div>
        </div>
      </div>

{/* desktopga tayyor emas */}

      </section> 
      <section className='w-full pb-[38px]'>
              <div className="container">
                <div className='w-full flex flex-col items-center'>
                  <p className='text-[20px] lg:text-[36px] mb-[16px]'>Join the club and get the benefits</p>
                  <p className='text-[14px] lg:text-[16px] lg:text-center'>Sign up for our newsletter and receive exclusive offers on new <br className='lg:block' /> ranges, sales, pop up stores and more</p>
                  <div className='w-[342px] lg:w-[472px] flex h-[56px] mt-[64px] lg:mt-[72px]'>
                    <input className='w-[224px] lg:w-[354px] h-[full] pl-[32px] bg-[#F9F9F9]' placeholder='your@email.com' type="text" />
                    <button className='w-[118px] h-full bg-[#2A254B] text-white'>Sign up</button>
                  </div>
                </div>
              </div>
      </section>
      <Footer/>
    </>
  )
}

export default page
