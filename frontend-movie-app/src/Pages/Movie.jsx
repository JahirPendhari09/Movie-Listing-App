import { useEffect, useState } from "react"

import { SingleMovie } from "../components/SingleMovie"

import {  fetchData } from "../components/action";

const Movie = () => {
    const [data, setdata] = useState([]);

    useEffect(()=>{
        fetchData().then(res =>setdata(res)).catch(err=> console.log(err))
    },[data])
    return <>
        
        <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",
          width:"95%",margin:"auto",gap:"20px", justifyContent:"space-around"}}
        >
            {
                data.length > 0 && data.map((item) => {
                    return <SingleMovie key={item._id} {...item}/>
                })
            }
        </div>
        
    </>
}

export { Movie }