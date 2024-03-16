import Image from 'next/image'
import carimg from '../imgs/Delivery.svg'
import pur from '../imgs/Purchase.svg'
import sprut from '../imgs/Sprout.svg'
import photo1 from '../imgs/Photo1.png'
import photo2 from '../imgs/Photo2.png'
import photo3 from '../imgs/Photo3.png'
import photo4 from '../imgs/Photo.png'
const MainHome = () => {
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
        <p className=' pl-[26px] mb-[36px]'>New ceramics</p>

          <div className='w-full flex justify-center gap-x-[16px] gap-y-[20px] flex-wrap'>
          <div>
            <Image className='mb-[24px]' src={photo1} width={163} height={288} alt='alt' />
            <p className='mb-[8px]'>Rustic Vase Set</p>
            <p>£250</p>
          </div>
          <div>
            <Image className='mb-[24px]' src={photo2} width={163} height={288} alt='alt' />
            <p className='mb-[8px]'>The Dandy chair</p>
            <p>£399</p>
          </div>
          <div>
            <Image className='mb-[24px]' src={photo3} width={163} height={288} alt='alt' />
            <p className='mb-[8px]'>The Silky Vase</p>
            <p>£125</p>
          </div>
          <div>
            <Image className='mb-[24px]' src={photo4} width={163} height={288} alt='alt' />
            <p className='mb-[8px]'>The Dandy chair</p>
            <p>£250</p>
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



      <section className='pt-[48px] relative'>
        <div className="container">
          <div className='w-full'>
              <p className='mb-[36]'>Our popular products</p>
              </div>
              <div className='sckrollers absolute top-[109px] left-0'>
              <div className='w-[200px]'>
                      <Image className='mb-[24px]' src={photo4} width={263} height={288} alt='alt' />
                      <p className='mb-[8px]'>The Dandy chair</p>
                      <p>£250</p>
                </div>
                <div>
                      <Image className='mb-[24px]' src={photo4} width={163} height={288} alt='alt' />
                      <p className='mb-[8px]'>The Dandy chair</p>
                      <p>£250</p>
                </div>
                <div>
                      <Image className='mb-[24px]' src={photo4} width={163} height={288} alt='alt' />
                      <p className='mb-[8px]'>The Dandy chair</p>
                      <p>£250</p>
                </div>
                <div>
                      <Image className='mb-[24px]' src={photo4} width={163} height={288} alt='alt' />
                      <p className='mb-[8px]'>The Dandy chair</p>
                      <p>£250</p>
                </div>
                <div className='w-[200px]'>
                      <Image className='mb-[24px]' src={photo4} width={263} height={288} alt='alt' />
                      <p className='mb-[8px]'>The Dandy chair</p>
                      <p>£250</p>
                </div>
                <div>
                      <Image className='mb-[24px]' src={photo4} width={163} height={288} alt='alt' />
                      <p className='mb-[8px]'>The Dandy chair</p>
                      <p>£250</p>
                </div>
                <div>
                      <Image className='mb-[24px]' src={photo4} width={163} height={288} alt='alt' />
                      <p className='mb-[8px]'>The Dandy chair</p>
                      <p>£250</p>
                </div>
                <div>
                      <Image className='mb-[24px]' src={photo4} width={163} height={288} alt='alt' />
                      <p className='mb-[8px]'>The Dandy chair</p>
                      <p>£250</p>
                </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default MainHome
