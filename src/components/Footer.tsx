import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-[#2A254B] pt-[40px] text-white pb-[20px]">
      <div className="container">
        <div className="w-full flex flex-col">
        <div className="w-full flex flex-wrap gap-x-[96px] lg:gap-x-[109px] gap-y-[40px]">
          <ul className="flex flex-col gap-y-[12px]">
            <li>Categories</li>
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
            <li>Crockery</li>
          </ul>
          <ul className="flex flex-col gap-y-[12px]">
            <li>Menu</li>
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
          <ul className="flex flex-col gap-y-[12px]">
            <li>Our company</li>
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
          <div>
            <p className="text-[16px]">Join our mailing list</p>
            <div className='w-[342px] lg:w-[627px] flex h-[56px] mt-[16px] lg:mt-[72px]'>
                    <input className='w-[224px] lg:w-[509px] h-[full] pl-[32px] bg-[#f9f9f93e] outline-none' placeholder='your@email.com' type="text" />
                    <button className='w-[118px] h-full text-[#2A254B] bg-white'>Sign up</button>
                  </div>
          </div>
        </div>
        <span className="block w-full border border-[#4E4D93] mt-[16px]"></span>
        <div className="mt-[20px] w-full flex justify-center md:justify-between items-center">
          <p className="text-[14px]">Copyright 2022 Avion LTD</p>
          <div className=" hidden md:flex w-[264px] justify-between items-center ">
         <Link href=''><i className='text-[20px] hover:text-[15px] bx bxl-linkedin-square'></i></Link>
          <Link href=''><i className='text-[20px] hover:text-[15px] bx bxl-facebook-square'  ></i></Link>
          <Link href=''><i className='text-[20px] hover:text-[15px] bx bxl-instagram' ></i></Link>
          <Link href=''><i className='text-[20px] hover:text-[15px] bx bxl-skype' ></i></Link>
          <Link href=''><i className='text-[20px] hover:text-[15px] bx bxl-twitter' ></i></Link>
          <Link href=''><i className='text-[20px] hover:text-[15px] bx bxl-pinterest'></i></Link>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
