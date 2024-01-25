import axios from "axios"

export const deleteMovie =(id)=>{
    axios.delete(`http://localhost:8080/movie/delete/${id}`)
    .then(res=>{
       fetchData();
    }).catch(err=>{
        console.log(err)
    })
}

export const postMovie =(movie)=>{
    axios.post(`http://localhost:8080/movie/add`,movie)
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


export const login =(user)=>{
    axios.post(`http://localhost:8080/user/login`,user)
    .then(res=>{
        alert("login up success")
        window.location.href="/"
    }).catch(err=>{
        alert("login up Field")
        console.log(err)
    })
}
export const signup =(user)=>{
    axios.post(`http://localhost:8080/user/register`,user)
    .then(res=>{
        alert("Sign up success")
        window.location.href="/login"
    }).catch(err=>{
        alert("Sign up Field")
        console.log(err)
    })
}
export const updateMovie =(id,data)=>{
    axios.patch(`http://localhost:8080/movie/update/${id}`,data)
    .then(res=>{
       fetchData();
    }).catch(err=>{
        console.log(err)
    })
}