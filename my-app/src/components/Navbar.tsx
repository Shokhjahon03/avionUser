import Link from "next/link"

const Navbar = () => {
  return (
    <>
     <nav className="md:mb-[25px]">
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
           <Link href='/cart' className="hidden md:block"><i className='bx bx-cart-alt'></i></Link>
            <button  className="md:hidden"><i className='bx bx-menu' ></i></button>
            <button className="hidden md:block"><i className='bx bx-user-circle'></i></button>
            </div>
        </div>
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
