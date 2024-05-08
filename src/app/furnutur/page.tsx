'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import { log } from 'console'
import React, { useEffect, useState } from 'react'

const page = () => {
    let [data,setData]=useState([])
    let func=async()=>{
         let x=await axios.get('https://65f258c5034bdbecc7649f36.mockapi.io/app/products')
         let y=await x.data
         let newArr=y.filter((e:any)=>e.category.toLowerCase()==='furniture') 
          setData(newArr)    
        }  
        useEffect(()=>{
            func()
            // console.log(data);
            
        },[])
  return (
    <>
     <Navbar/>
     <div className="container">
     <div className='min-h-dvh flex justify-between flex-wrap gap-5'>
            {
             data.map((e:{name:string,image:string},i)=>(
                <div key={i}>
                    <img src={e.image} alt="alt" />
                    <p>{e.name}</p>
                </div>
             ))  
            }
        </div>
     </div>
     <Footer/> 
    </>
  )
}

export default page
