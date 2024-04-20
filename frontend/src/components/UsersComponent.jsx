/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react"
import { Button } from "./Button"

export const UserComponent = () => {
    // Replace with backend call
    // eslint-disable-next-line no-unused-vars
    const [users, setUsers] = useState([{
        firstName: "Harkirat",
        lastName: "Singh",
        _id: 1
    }]);

    return <>
        <div className="font-bold mt-6 text-lg pt-5">
            Users
        </div>
        <div className="my-2">
            <input type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </>
}

function User({user}) {
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button label={"Send Money"} />
        </div>
    </div>
}