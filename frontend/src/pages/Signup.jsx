import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Inputbox } from "../components/Inputbox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { use } from "react";

export function Signup(){
    const [firstname , setfirstname] = useState("")
    const [lastname , setlastname] = useState("")
    const [username , setusername] = useState("")
    const [passward , setpassward] = useState("")
    const navigate = useNavigate();
    return(
        <>
            <div className="bg-slate-300 h-screen flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="bg-white rounded-lg h-max text-center p-2 w-80">
                        <Header title={"Sign up"}/>
                        <SubHeading label={"Enter your information to create an account"}></SubHeading>
                        <Inputbox onChange={(e)=>{
                            setfirstname(e.target.value)
                        }} label={"First Name"} placeholder={"Joe"}/>
                        <Inputbox onChange={e=>{
                            setlastname(e.target.value)
                        }} label={"Last Name"} placeholder={"Mamma"}/>
                        <Inputbox onChange={e=>{
                            setusername(e.target.value)
                        }} label={"Email"} placeholder={"example@gmail.com"}/>
                        <Inputbox onChange={e=>{
                            setpassward(e.target.value)
                        }} label={"Password"} placeholder={"12345678"}/>
                        <Button onClick={async ()=>{
                            const response = await axios.post("http://ec2-43-204-109-7.ap-south-1.compute.amazonaws.com/api/v1/user/signup",{
                                username,
                                passward,
                                lastname,
                                firstname
                            })
                            localStorage.setItem("token" , response.data.token)
                            navigate("/dashboard")

                        }} label={"Sign up"}/>
                        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={'/signin'}/>
                    </div>
                </div>
            </div>
        </>
    )
}
