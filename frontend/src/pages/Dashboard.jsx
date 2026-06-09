import { useEffect, useState } from "react"
import { SearchUSers } from "../components/SearchUsers"
import axios from "axios";

export function Dashboard() {

    const [userData, setUserData] = useState(null);

    useEffect(()=>{
        const count = async() =>{
            const token = localStorage.getItem("token")
            Response = await axios.get("http://ec2-43-204-109-7.ap-south-1.compute.amazonaws.com/api/v1/accounts/balance",{
                headers :{
                    autherization :`Bearer ${token}`
                }
            })
            setUserData(Response.data)
        }
        count();
    },[])

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <>

            <div className="flex justify-between px-2 py-1 shadow">
                <div className="flex pl-2 flex-col justify-center">PayTM App</div>
                <div className="flex space-x-4 pr-1 items-center">

                    <div className=" ">
                        {userData.name}
                    </div>

                    <div className="w-12 h-12 bg-slate-300 flex text-2xl pb-0.5 rounded-full items-center justify-center text-black ">
                        {userData.name[0].toUpperCase()}
                    </div>
                </div>
            </div>


            <div className="px-10">

                <div className="flex justify-start space-x-3 py-5 font-bold text-lg">
                    <div>Your balance</div>
                    <div>Rs {userData.balance}</div>
                </div>

                <SearchUSers></SearchUSers>

            </div>
        </>
    )
}