import axios from "axios"

export const deleteMovie =(id)=>{
    axios.delete(`http://localhost:8080/movie/delete/${id}`)
    .then(res=>{
       fetchData();
    }).catch(err=>{
        console.log(err)
    })
}

export const fetchData =()=>{
    return (axios.get("http://localhost:8080/movie")
    .then(res=>{
        // console.log(res)
        return res.data
    }).catch(err=>{
        console.log(err)
    })
    )
}

export const updateMovie =(id,data)=>{
    axios.patch(`http://localhost:8080/movie/update/${id}`,data)
    .then(res=>{
       fetchData();
    }).catch(err=>{
        console.log(err)
    })
}