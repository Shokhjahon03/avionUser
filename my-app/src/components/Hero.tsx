import Image from "next/image"
import imgtable from '../imgs/Photo.svg'
const Hero = () => {
  return (
    <>
     <div className="hero w-full bg-[#2A254B] md:bg-inherit">
       <div className="container">
        
        {/*mobile hero  */}

        <div className=" w-full pl-[24px] pr-[24px] pt-[40px] md:hidden">
        <p className="text-[32px] font-normal leading-[44.8px] text-white">
        The furniture brand for the future, with timeless designs
        </p>
        <p className="text-[18px] leading-[27px] font-normal mt-[80px] text-white">
        A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.
        </p>
        <button className="mt-[32px] w-full h-[56px] text-[16px] leading-[24px] font-normal text-white bg-[#F9F9F926] mb-[24px]">
        View collection
        </button>
        </div>

{/* md dan keyingi hero */}

        <div className="hidden md:flex w-full">
            <div className="w-[60%] md:bg-[#2A254B]">
            <div className=" w-full pl-[44px] pr-[24px] pt-[80px]">
        <p className="text-[32px] font-normal leading-[44.8px] text-white">
        The furniture brand for the <br /> future, with timeless designs
        </p>
        <button className="mt-[32px] w-[180px] h-[56px] text-[16px] leading-[24px] font-normal text-white bg-[#F9F9F926] mb-[24px]">
        View collection
        </button>
        <p className="text-[18px] leading-[27px] font-normal mt-[280px] text-white">
        A new era in eco friendly furniture with Avelon, the French luxury retail brand <br />
with nice fonts, tasteful colors and a beautiful way to display things digitally <br />
using modern web technologies.
        </p>
        
        </div>
            </div>
            <div className="w-[40%]">
                <Image width={550} height={400} alt="img" src={imgtable}/>
            </div>
        </div>

       </div>
    </div> 
    </>
  )
}

export default Hero
