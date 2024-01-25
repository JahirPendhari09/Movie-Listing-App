import axios from "axios"

export const deleteMovie =(id)=>{
    axios.delete(`https://clean-yak-pea-coat.cyclic.app/movie/delete/${id}`)
    .then(res=>{
       fetchData();
    }).catch(err=>{
        console.log(err)
    })
}

export const postMovie =(movie)=>{
    axios.post(`https://clean-yak-pea-coat.cyclic.app/movie/add`,movie)
    .then(res=>{
       fetchData();
    }).catch(err=>{
        console.log(err)
    })
}

export const fetchData =()=>{
    return (axios.get("https://clean-yak-pea-coat.cyclic.app/movie")
    .then(res=>{
        // console.log(res)
        return res.data
    }).catch(err=>{
        console.log(err)
    })
    )
}


export const login =(user)=>{
    axios.post(`https://clean-yak-pea-coat.cyclic.app/user/login`,user)
    .then(res=>{
        alert("login up success")
        window.location.href="/"
    }).catch(err=>{
        alert("login up Field")
        console.log(err)
    })
}
export const signup =(user)=>{
    axios.post(`https://clean-yak-pea-coat.cyclic.app/user/register`,user)
    .then(res=>{
        alert("Sign up success")
        window.location.href="/login"
    }).catch(err=>{
        alert("Sign up Field")
        console.log(err)
    })
}
export const updateMovie =(id,data)=>{
    axios.patch(`https://clean-yak-pea-coat.cyclic.app/movie/update/${id}`,data)
    .then(res=>{
       fetchData();
    }).catch(err=>{
        console.log(err)
    })
}