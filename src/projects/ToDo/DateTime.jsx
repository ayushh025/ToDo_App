import { useEffect,useState } from "react";


export default function TodoDateTime(){
    const [dateTime,setDateTime]=useState();
    useEffect(()=>{
        const interval=  setInterval(()=>{
            const now=new Date();
            const formattedDate = now.toLocaleDateString();
            const time = now.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${time}`)
        },1000)
        return ()=>clearInterval(interval)
    },[])
    return(
        <>
        <h2 className="date-time" style={{marginBottom:"20px"}}>{dateTime}</h2>
        </>
    )
}