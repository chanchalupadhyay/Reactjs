import React, { useState } from "react"
import "../App.css"


function SignUp(){
    const username=useFormInput("");
    const password=useFormInput("");
    const fname=useFormInput("");
    const lname=useFormInput("");
    const occupation=useFormInput("");
    const phone=useFormInput("");



    // handle button click on Signup
    const handleSignUp=()=>{
    }


return(
    <div className="container">
    SignUp
        <br/>
        <br/>
            <label>First Name</label> 
            <input type="text" {...fname}/>
            <br/>
            <label>Last Name</label> 
            <input type="text" {...lname}/>
            <br/>
           <label> Username</label>
            <input type="text" {...username}/>
            <br/>
       
           <label>  password</label>
            <input type="text" {...password}/>
            <br/>
           <label>  occupation</label>
            <input type="text" {...occupation}/>
            <br/>
           <label> phone number</label>
            <input type="text" {...phone}/>
       
            <br/>
    
        <input type="button" onClick={handleSignUp} value="Sign up"></input>
    </div>
)


}

const useFormInput=(initialValue)=>{
const[value,setValue]=useState(initialValue);

const handleChange=e=>{
    setValue(e.target.value);
}
return{
    value,
    onChange:handleChange
}
}
export default SignUp;