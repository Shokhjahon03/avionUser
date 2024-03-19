import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const page = () => {
  return (
    <>
     <Navbar/> 
     <header className="bg-[#F9F9F9]">
     <div className="container">
        <div className="w-full pt-[36px]">
            <p className="mb-[40px]">Your shopping cart</p>
        </div>
        </div>  
     </header>
     <Footer/>
    </>
  )
}

export default page
