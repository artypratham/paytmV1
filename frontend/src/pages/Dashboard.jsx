import {Appbar} from "../components/Appbar"
import {Balance} from "../components/Balance"
import {UserComponent} from "../components/UsersComponent"


export const Dashboard =() => {

    return(
        <div className="px-10 py-10">
        <Appbar/>
        <div className="n-8 ">
            <Balance value= {"10,000"}/>
            <UserComponent />
        </div>
        
        </div>
    )
}
