import Hero from "@/components/Hero"
import MainHome from "@/components/MainHome"
import Navbar from "@/components/Navbar"
import Link from "next/link"
import pp from '../../imgs/Image.png'
import ppp from '../../imgs/Image22.png'
import Image from "next/image"
import carimg from '../../imgs/Delivery.svg'
import pur from '../../imgs/Purchase.svg'
import sprut from '../../imgs/Sprout.svg'
import Footer from "@/components/Footer"

const page = () => {
 
  return (
    <>
    <Navbar/>
    <div className="hero">
      <div className="container">
        <div className="w-full flex justify-center mt-[32px] pb-[79px]">
            <p className="text-[32px] lg:text-center">A brand built on the love of craftmanship,<br className="hidden lg:block" /> quality and outstanding customer service</p>
        </div>
      </div>
    </div>
    <section className='w-full'>
              <div className="container2">
                <div className='w-full flex flex-col lg:justify-between lg:flex-row'>
                  <div className='mb-[38px] pt-[48px] pl-[24px] pr-[24px] lg:w-[720px]'>
                    <p className='text-[20px] lg:text-[24px] mb-[12px] lg:mb-[25px]'>From a studio in London to a global brand with <br className='hidden lg:block' /> over 400 outlets</p>
                    <p className='text-[14px] mb-[40px] lg:text-[16px] '>When we started Avion, the idea was simple. Make high quality furniture <br className='hidden lg:block' /> affordable and available for the mass market.</p>
                    <p className='text-[14px] lg:text-[16px]'> Handmade, and lovingly crafted furniture and homeware is what we live,<br className='hidden lg:block' /> breathe and design so our Chelsea boutique become the<br className='hidden lg:block' /> hotbed for the London interior design community.</p>
                    <div className='w-full flex justify-center mt-[64px] lg:mt-[196px] lg:justify-start'>
                    <button className='bg-[#F9F9F9] w-[342px] h-[56px] text-[16px] lg:w-[150px]'>Get in touch</button>
                    </div>
                  </div>
                  <Image className='w-[390px] h-[358px] lg:w-[720px] lg:h-[603px]' src={pp} alt="alt" />
                </div>
              </div>
      </section>
      <section className='w-full'>
              <div className="container2">
                <div className='w-full flex flex-col lg:justify-between lg:flex-row'>
                <Image className='w-[390px] h-[358px] lg:w-[720px] lg:h-[603px]' src={ppp} alt="alt" />
                  <div className='mb-[38px] pt-[48px] pl-[24px] pr-[24px] lg:w-[720px]'>
                    <p className='text-[20px] lg:text-[24px] mb-[12px] lg:mb-[25px]'>Our service isn’t just personal, it’s actually<br className="hidden lg:block"/> hyper personally exquisite</p>
                    <p className='text-[14px] mb-[40px] lg:text-[16px] '>When we started Avion, the idea was simple. Make high quality furniture <br className='hidden lg:block' /> affordable and available for the mass market.</p>
                    <p className='text-[14px] lg:text-[16px]'> Handmade, and lovingly crafted furniture and homeware is what we live,<br className='hidden lg:block' /> breathe and design so our Chelsea boutique become the<br className='hidden lg:block' /> hotbed for the London interior design community.</p>
                    <div className='w-full flex justify-center mt-[64px] lg:mt-[196px] lg:justify-start'>
                    <button className='bg-[#F9F9F9] w-[342px] h-[56px] text-[16px] lg:w-[150px]'>Get in touch</button>
                    </div>
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
      <section className="bgs pt-[24px] lg:pt-[97px] pb-[32px] lg:pb-[86px]">
          <div className="container">
                <div className='w-full flex flex-col items-center text-white'>
                  <p className='text-[20px] lg:text-[36px] mb-[16px]'>Join the club and get the benefits</p>
                  <p className='text-[14px] lg:text-[16px] lg:text-center'>Sign up for our newsletter and receive exclusive offers on new <br className='lg:block' /> ranges, sales, pop up stores and more</p>
                  <div className="w-full mt-[20px] lg:w-[442px] flex flex-col lg:flex-row lg:justify-between">
                    <div className="flex items-center">
                    <i className='bx bxs-check-circle'></i>
                    <p>Exclusive offers</p>
                    </div>
                    <div className="flex items-center">
                    <i className='bx bxs-check-circle'></i>
                    <p>Exclusive offers</p>
                    </div>
                    <div className="flex items-center">
                    <i className='bx bxs-check-circle'></i>
                    <p>Exclusive offers</p>
                    </div>
                  </div>
                  <div className='w-[342px] lg:w-[472px] flex h-[56px] mt-[64px] lg:mt-[72px]'>
                    <input className='w-[224px] lg:w-[354px] h-[full] pl-[32px] outline-none text-black bg-[#F9F9F9]' placeholder='your@email.com' type="text" />
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
