'use client'

import Image from 'next/image'
import carimg from '../imgs/Delivery.svg'
import pur from '../imgs/Purchase.svg'
import sprut from '../imgs/Sprout.svg'
import photo1 from '../imgs/Photo1.png'
import photo2 from '../imgs/Photo2.png'
import photo3 from '../imgs/Photo3.png'
import photo4 from '../imgs/Photo.png'
import allDatas from '@/store/store'
import { useEffect } from 'react'
import pp from '../imgs/Image.png'
import Footer from './Footer'
const MainHome = () => {

  let{loading,datas,getDatas}=allDatas()

  useEffect(()=>{
    getDatas()
  },[])

let url=new URL (
  'https://firebasestorage.googleapis.com/v0/b/mernblog-snd.appspot.com/o/1710543813228-Photo%20(2).png?alt=media&token=5d71d8dc-2c36-47bd-8b0b-9b2366477ff'
)

useEffect(()=>{
  console.log(url.pathname);
  console.log(url.port);
  console.log(url.hostname);
  
  
},[])

  return (
    <>
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


{/* desktopga tayyor emas */}



      <section className='pt-[48px] relative pb-[38px]'>
        <div className="container pl-[26px]">
          <div className='w-full '>
              <p className='mb-[36px] text-[#2A254B] lg:text-[32px]'>Our popular products</p>
              </div>
              <div className='sckrollers pl cursor-pointer'>
              {
                datas.map((e:{image:string,name:string,price:number,category:string,description:string},i)=>(
                  <div className=' hover:bg-slate-200 w-[200px] p-[10px] rounded-lg' key={i} >
                      <img className=' rounded-md' src={e.image} alt="alt" />
                      <p className='mb-[8px] lg:mt-[10px] lg:mb-[15px]'>{e.name}</p>
                      <p>£{e.price}</p>
                  </div>
                ))
              }
              </div>
              <div className='w-full flex justify-center mt-[32px] lg:mt-[42px]'>
                <button className=' w-[342px] ld:w-[170px] h-[56px] bg-[#F9F9F9]'>View collection</button>
              </div>
          </div>
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
      <section className='w-full'>
              <div className="containe2">
                <div className='w-full flex flex-col lg:flex-row'>
                  <div className='mb-[38px] pt-[48px] pl-[24px] pr-[24px]'>
                    <p className='text-[20px] mb-[12px]'>From a studio in London to a global brand with over 400 outlets</p>
                    <p className='text-[14px]'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                    <p className='text-[14px]'> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                    <div className='w-full flex justify-center mt-[64px]'>
                    <button className='bg-[#F9F9F9] w-[342px] h-[56px] text-[16px]'>Get in touch</button>
                    </div>
                  </div>
                  <Image className='w-[390px] h-[358px]' src={pp} alt="alt" />
                </div>
              </div>
      </section>
      <Footer/>
    </>
  )
}

export default MainHome
