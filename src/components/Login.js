import React, { useState } from "react"
import axios from "axios";
import "./Styles.css"
import "../App.css"

function Login(){
    const username=useFormInput("");
    const password=useFormInput("");
    const [error, setError] = useState(null);


    // handle button click on login 
    const handleLogin=()=>{
       axios.post("http://localhost:3000/users/signin",{username:username.value,password:password.value})
       .then(response=>{
           console.log(response);
           //redirect into welcome page
       }).catch(error=>{
           
        if(error.response.status===401)setError(error.response.data.message)
       else  console.log("something went wrong")
       })


    }


return(
    <div className="container">
        login
        <div>
            Username
            <input type="text" {...username}/>
        </div>
        <div>
            password
            <input type="text" {...password}/>
        </div>
        <input type="button" onClick={handleLogin} value="Login"></input>
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
export default Login;