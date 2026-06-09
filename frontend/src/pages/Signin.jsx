import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Inputbox } from "../components/Inputbox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export function Signin(){
    const [username, setusername] = useState("")
    const [passward, setpassward] = useState("")
    const navigate = useNavigate()

    return(
        <div className="flex h-screen justify-center bg-slate-300">
            <div className="flex flex-col justify-center">
                <div className="bg-white rounded-lg h-max text-center p-2 w-80">
                    <Header title={"Sign in"} ></Header>
                    <SubHeading label={"Enter your credentials to access your account"}/>
                    <Inputbox onChange={e=>{
                        setusername(e.target.value)
                    }} label={"Email"} placeholder={"example@gmail.com"}/>
                    <Inputbox onChange={e=>{
                        setpassward(e.target.value)
                    }} label={"Passward"} placeholder={"1234567"}/>
                    <Button onClick={async()=>{
                        const response = await axios.post("http://ec2-43-204-109-7.ap-south-1.compute.amazonaws.com/api/v1/user/signin",{
                            username,
                            passward
                        })
                        localStorage.setItem("token" , response.data.token)
                        navigate("/dashboard")
                    }} label={"Sign in"} />
                    <BottomWarning label={"Dont have an account"} to={"/signup"} buttonText={"Sing up"}></BottomWarning>            
                    
                </div>

            </div>
        </div>
    )
}
