
const Navbar = () => {
  return (
    <>
     <nav>
       <div className="container md:pl-[20px] md:pr-[20px]">
        <div className="navbar w-full h-[69px] flex  items-center justify-between pl-[24px] pr-[20px] md:border-b">
            <p className="text-[#22202E] text-[24px] leading-[29.52px] font-normal">Avion</p>
            <div className="w-[52px] flex justify-between items-center">
            <i className='bx bx-search'></i>
            <i className='bx bx-menu' ></i>
            </div>
        </div>
        </div> 
    </nav> 
    </>
  )
}

export default Navbar
