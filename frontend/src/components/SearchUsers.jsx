import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios"
import { useNavigate } from 'react-router-dom';


export function SearchUSers() {

    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState("")

    useEffect(() => {
        axios.get("http://ec2-43-204-109-7.ap-south-1.compute.amazonaws.com/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])

    return (
        <>
            <div className="pb-3">
                <div className="py-1  text-left font-semibold text-lg">Users</div>
                <input onChange={
                    (e) => {
                        setFilter(e.target.value)
                    }
                } className="w-full border rounded px-2 py-1 border-slate-200" type="text" placeholder={"Search users..."}></input>
            </div>

            <div>
                {users.map(user => <User user={user} />)}
            </div>

        </>
    )
}

function User({ user }) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between">
            <div>
                <div className="flex space-x-4 items-center">
                    <div className="w-12 h-12 bg-slate-300 rounded-full flex flex-col items-center justify-center text-black text-2xl">
                        {user.firstname[0].toUpperCase()}
                    </div>
                    <div className="text-2xl">
                        {user.firstname} {user.lastname}
                    </div>
                </div>
            </div>
            <div className="w-40">
                <Button onClick={()=>{
                     navigate("/transfer?name="+user.firstname+"&id="+user._id)
                }} label={"Send Money"}></Button>
            </div>
        </div>
    )
}