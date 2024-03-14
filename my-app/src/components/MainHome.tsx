import Image from 'next/image'
import carimg from '../imgs/Delivery.svg'
import pur from '../imgs/Purchase.svg'
import sprut from '../imgs/Sprout.svg'
const MainHome = () => {
  return (
    <>
     <section>
      <div className="container">
        <div className="w-full pt-[48px] pl-[24px] pr-[24px]">
          <p className='text-[20px] leading-[28px] font-normal text-[#2A254B] mb-[36px] md:mb-[51px] md:text-center'>What makes our brand different</p>
          <div className="flex flex-wrap justify-center gap-[59px]">
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
      </section> 
    </>
  )
}

export default MainHome
