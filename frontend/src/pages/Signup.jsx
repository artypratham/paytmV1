import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios"

export const Signup = () => {

    

    const [firstName, setFirstName] = useState(" ")
    const [lastName, setLastName] = useState(" ")
    const [username, setUserName] = useState(" ")
    const [password, setPassword] = useState(" ")

    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            <Heading label={"Sign up"}/>
            <SubHeading label={"Enter your information to create an account"} />

            <InputBox onChange={e => {
                setFirstName(e.target.value)
            }} label={"First Name"} placeholder="Enter your first name" />

            <InputBox onChange={e => {
                setLastName(e.target.value)
            }} label={"Last Name"} placeholder="Enter your last name" />

            <InputBox onChange={e => {
                setUserName(e.target.value)
            }}  label={"Email"} placeholder="Enter your email"/>

            <InputBox onChange={e => {
                setPassword(e.target.value)
            }} label={"Password"} placeholder="Set a strong password"/>
            
            <div className="pt-4">
                <Button  onClick={() => {
                      axios.post("http://localhost:3000/api/v1/user/signup", {
                      username, 
                      firstName,
                        lastName,
                        password
                      })
                }} label={"Sign up"} />
            </div>

            <BottomWarning label={"Already have an account? " } buttonText={"Sign in"} to={"/signin"} />
            
            </div>
            </div>
        </div>

    )

}
