import React,{useState} from "react";
import  Axios  from "axios";
import { useHistory } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
  
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
 let history = useHistory();
const login = () => {
  Axios({
    method: "POST",
    data: {
      email: userName,
      password: password,
    },
 
    withCredentials: true,
    url: 'http://localhost:8000/api/login',
  }).then((res) => localStorage.setItem('token',res.data.token));
  if(localStorage.getItem('token') !==null || "")
  {
    history.push("/dashboard");
    toast("Login Successfully!");
  }
  else{
   // history.push("/");
    toast("Please Enter Valid Details!");
  }
};


const handleSubmit=async(e)=>{
e.preventDefault();
login()
}
  return (<>
    <form className="login-container" onSubmit={handleSubmit}>
      <div className="input-container">
        <h1 className="heading">USER LOGIN </h1>
        <input type="text" placeholder="Email" onChange={(e)=>setUserName(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        <a href="/register" className="register-btn">Register</a>
        <button type="submit" className="button">LOGIN</button>
      </div>

    </form>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
</>
  );
}
// Login.propsTypes={
//   setToken:PropsTypes.func.isRequired
// };