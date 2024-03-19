import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";
type storeType={
    loading:boolean,
    datas:any,
    getDatas:()=>void,
    getIddata:(id:number)=>void,
    iddata:any,
    torf:boolean,
    stTorf:()=>void,
    cart:any
}

let allDatas = create<storeType>((set) => ({
    loading:true,
    torf:false,
    datas:[],
    iddata:{},
    cart,

    getDatas:async()=>{
       try {
        let res=await axios.get('https://65f258c5034bdbecc7649f36.mockapi.io/app/products')
        let dat=await res.data
        set(() => ({
            loading:false,
            datas:dat
          }));
       } catch (error) {
        console.log(error);
       }
    },
    getIddata:async(id)=>{
      let x= await axios.get(`https://65f258c5034bdbecc7649f36.mockapi.io/app/products/${id}`)
      let y=await x.data
      set(()=>({
          iddata:y
      }))
    },
    stTorf:()=>{
      set(()=>(
        {
          torf:  true
        }
      ))
    }
  }))

  export default allDatas;

 
 