'use client'
import allDatas from "@/store/store"
import { useState } from "react"

const LoginP = () => {

    let {stTorf}=allDatas()

    let [val,setVal]=useState<{name:string,email:string}>({name:'',email:''})


    let func=()=>{
        if(val.email!=="" && val.name!==''){
            stTorf()
        }
    }
    let submit=(event:React.SyntheticEvent<EventTarget>)=>{
        event.preventDefault(   )
    }

  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center">
        <form onSubmit={submit} className="w-[500px] flex flex-col gap-[50px] items-center">
            <input value={val.name} onChange={(e)=>setVal({name:e.target.value,email:val.email})} type="text" className=" outline-none bg-slate-200 text-black w-[400px] h-[56px] rounded-xl border-none " placeholder="# Username" />
            <input value={val.email} onChange={(e)=>setVal({name:val.name,email:e.target.value})} type="text" className=" outline-none bg-slate-200 text-black w-[400px] h-[56px] rounded-xl border-none " placeholder="# Useremali" />
            <button className="w-[400px] h-[56px] rounded-xl bg-amber-200" onClick={()=>func()}>Regster</button>
        </form>
    </div>
  )
}

export default LoginP
