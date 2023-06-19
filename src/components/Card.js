import React,{useState,useEffect} from"react"
import axios from'axios'
export default function Card(){
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products/')
        
        .then((res)=>setData(res.data.products))
        .catch((error)=>console.log(error.message))

    },[])
    return(
        <>
      <div className="mainpage"> 
        {

            data.map((item)=>(
                <div className="cards">
                   <div><b>{item.title}</b></div>
                   <img src={item.thumbnail} className="imgcard" />
                   <div>{item.category}</div>
                   <div>{item.brand}</div>
                 <div>Rs/-{item.price}</div>  
                   
                </div>

            ))
        }
        </div> 
      
        
        </>
    )
}