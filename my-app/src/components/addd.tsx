'use client'

import { useState } from "react"


type asss={name:string,image:string,price:number,category:string,description:string,id:number,soni:number}

const Addd = ({e,all,setAll}:any) => {
    let [a,setA]=useState(e.soni)

    let funcMinus=()=>{
        if (a>0) {
            setA(a-1)
            setAll(all-250)
        }
    }
    let funcPlus=()=>{
        setA(a+1)
        setAll(all+250)
    }

  return (
    <>
      <div className="w-full flex justify-between items-center mt-[50px] mb-[50px] pb-[50px] border-b">
                      <div className="w-[309px] gap-x-[21px] flex">
                        <img className="w-[300px] h-[300px]" src={e.image} alt="alt" />
                        <div className="pt-[12px]">
                          <p className="text-[20px] mb-[12px]">{e.name}</p>
                          <p className="w-[170px] text-[14px] mb-[8px]">{e.description}</p>
                          <p>£{e.price}</p>
                        </div>
                      </div>
                      <div className="w-[408px] flex justify-between items-center">
                      <div className="flex w-[112px] justify-evenly items-center">
                        <button onClick={()=>funcMinus()}>-</button>
                        <p>{a}</p>
                        <button onClick={()=>funcPlus()}>+</button>
                      </div>
                      <p>£{a*e.price}</p>
                      </div>
                  </div>
    </>
  )
}

export default Addd
