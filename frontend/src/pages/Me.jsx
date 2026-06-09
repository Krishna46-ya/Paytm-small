import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Me(){
    const navigate =useNavigate();

    useEffect(()=>{
            navigate("/signup")
    },[])
}