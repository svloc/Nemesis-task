import React,{useState} from "react";
import  Axios  from "axios";
import { useHistory } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./register.css";
import { useForm } from "react-hook-form";
export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [gender,setGender]=useState("");
  const [email,setEmail]=useState("");
 let history = useHistory();
const registerData = () => {
  Axios({
    method: "POST",
    data: {
      name: name,
      gender:gender,
      email:email,
      password: password,
    },
    withCredentials: true,
    url: 'http://localhost:8000/api/register',
  }).then((res) => {
  if(res !==null || "")
  {
    toast("Register Successfully!");
    history.push("/");
  }
  else{
    toast("Something went wrong!");
  }})
};


const handleData=async()=>{
//e.preventDefault();
  registerData()
  setName("");
  setPassword("");
  setGender("");
  setEmail("");
}
  return (<>
    <form className="register-container" onSubmit={handleSubmit(handleData)}>
      <div className="wrapper">
        <h1 className="heading">REGISTER </h1>
        <input type="text" placeholder="Name" {...register("name", { pattern: /^[A-Za-z]+$/i,required: true })} onChange={(e)=>setName(e.target.value)} />
        {errors?.name?.type === "pattern" && (
        <p className="error">Alphabetical characters only</p>)}
        {errors?.name?.type === "required" && <p className="error">This field is required</p>}
      
        <input type="text" placeholder="Gender" {...register("gender", { pattern: /^[A-Za-z]+$/i,required: true })} onChange={(e)=>setGender(e.target.value)} />
        {errors?.gender?.type === "pattern" && (
        <p className="error">Alphabetical characters only</p>)}
        {errors?.gender?.type === "required" && <p className="error">This field is required</p>}
      
        <input type="text" placeholder="Email"  {...register("email", { pattern:  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,required: true })} onChange={(e)=>setEmail(e.target.value)} />
        {errors?.email?.type === "pattern" && (
        <p className="error">Enter Valid Email</p>)}
        {errors?.email?.type === "required" && <p className="error">This field is required</p>}

        <input type="password" placeholder="Password"{...register("password", { required: true })}  onChange={(e)=>setPassword(e.target.value)} />
        {errors?.password?.type === "required" && <p className="error">This field is required</p>}
        <button type="submit" className="button">Register</button>
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