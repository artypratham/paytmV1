import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";



export const Signin = ()  => {
    return(
        <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            <Heading label={"Sign in"}/>
            <SubHeading label={"Enter your credentials to sign in"} />
            <InputBox label={"Email"} placeholder={"Enter your email"}/>
            <InputBox label={"Password"} placeholder={"Enter your password"}/>

            <div className="pt-4">
                <Button label={"Sign in"}/>
            </div>
            
            <BottomWarning label={"Don't have an account? " } buttonText={"Create Account"} to={"/signup"} />

                </div>
            </div>
        </div>
    )
}
