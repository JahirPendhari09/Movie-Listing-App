import { ReactNode, useState } from "react"
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoute =({children})=>{

    const isAuth=localStorage.getItem("isAuth")|| false
    if (isAuth==false) {
        return (
          <Navigate to="/login"/>
        );
      }
    return <>{children}</>;
    
}

export {PrivateRoute}