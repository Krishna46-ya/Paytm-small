import { useState } from "react";
import { Header } from "../components/Header";
import { useSearchParams } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export function Transfer(){
    const navigate = useNavigate()
    const [amount , setAmount] = useState(0);
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name")
    const id = searchParams.get("id")

    return(
        <div className="flex justify-center h-screen bg-gray-100">
            <div className="flex flex-col h-full justify-center">
                <div className="bg-white p-4 shadow-lg text-center w-96 rounded-lg ">
                    <Header title={"Send Money"}></Header>

                <div className="pt-10 p-6">
                
                <div className="flex space-x-4 items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full items-center justify-center pt-1.5 text-white text-2xl">
                        {name[0].toUpperCase()}
                    </div>
                    <div className="text-2xl font-medium">
                        {name}
                    </div>
                </div>


                <div>
                    <div className="py-2 text-left text-sm font-medium">{"Amount (in Rs)"}</div>
                    <input onChange={(e)=>{
                        setAmount(e.target.value)
                    }} className="w-full border rounded px-2 py-1 border-slate-200" type="number" placeholder={"Enter amount"}></input>
                </div>

            
                <button onClick={async()=>{
                    const response = await axios.post("http://ec2-43-204-109-7.ap-south-1.compute.amazonaws.com/api/v1/accounts/transfer",
                        {
                            to : id,
                            amount : amount
                        },{
                        headers :{
                            autherization :"Bearer "+localStorage.getItem("token")
                        }
                        
                    })
                    navigate("/dashboard")
                }} className="bg-green-500 w-full mt-4 rounded-lg text-white  p-2">Initiate Transfer</button>

                </div>

                </div>
            </div>
        </div>
    )
}