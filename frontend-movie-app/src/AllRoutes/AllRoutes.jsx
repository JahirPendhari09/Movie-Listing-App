import { Route, Routes } from "react-router-dom"
import { Login } from "../Pages/Login"
import { Signup } from "../Pages/Signup"
// import { Homepage } from "../pages/Homepage"
import { Navbar } from "./Navbar"
import { Movie } from "../Pages/Movie"
// import { PrivateRoute } from "../components/PrivateRoute"

const AllRoutes =()=>{
    return <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Movie/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
    </Routes>
    </>
}

export {AllRoutes}