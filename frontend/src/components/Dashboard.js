import React,{useState,useEffect } from "react";
import  Axios  from "axios";
import './dashboard.css';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
export default function Dashboard(){
  const [username,setUserName]=useState("");
  const [address,setAddress]=useState("");
  const [email, setEmail] = useState("");
  const [moNumber, setMoNumber] = useState("");
  const [arr, setArr] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();
 // const token = localStorage.getItem('token');  
  let history = useHistory();
const addUser = () => {
    const body = {
        username: username,
        moNumber: moNumber,
        email: email,
        address: address
    };
    Axios.post( 
      'http://localhost:8000/api/',
      body
    ).then((response) => {
        var response = response.data;
        toast("Data Added Successfully!");
        location.reload();
      },
      (error) => {
        var status = error.response.status
      })
      Axios.get( 
        'http://localhost:8000/api/',
      ).then((response) => {
          var response = response.data;
          setArr(response.data);
        },
        (error) => {
          var status = error.response.status;
        })
    }

    useEffect(() => {
      Axios.get( 
        'http://localhost:8000/api/',
      ).then((response) => {
          var response = response.data;
          setArr(response.data);
        },
        (error) => {
          var status = error.response.status;
        })
     }, []);

  
const handleData=async(e)=>{
 // e.preventDefault();
 addUser();
}

const logout=async(e)=>{
  e.preventDefault();
  toast("Logout Successfully!");
  history.push("/");
  localStorage.removeItem("token");

  }
 const onDelete =async(id)=>{
 location.reload();
  toast("Deleted Successfully!");
 
   Axios.delete( 
    `http://localhost:8000/api/${id}`
  ).then((response) => {
      var response = response.data;
    },
    (error) => {
      var status = error.response.status;
    }) 
   
 }
  return (<>
  
  <header>
  <a href="/dashboard"><button className="button">home</button></a>
  <nav>
    <ul className="navlinks">
      <li><a onClick={logout}>logout</a></li>
    </ul>
  </nav>
</header> 
<h1 className="heading">USER DASHBOARD </h1>
<div className="page-content">
  <div className="main-wrapper">
    <form onSubmit={handleSubmit(handleData)}>
    <div className="dashboard-container" >
        <input type="text" placeholder="Username" {...register("username", { pattern: /^[A-Za-z]+$/i,required: true })} onChange={(e)=>setUserName(e.target.value)} />
        {errors?.username?.type === "pattern" && (
        <p className="error">Alphabetical characters only</p>)}
        {errors?.username?.type === "required" && <p className="error">This field is required</p>}
      
        <input type="text" placeholder="Mobile Number" {...register("moNumber", { pattern: /^[0-9]+$/,required: true })} onChange={(e)=>setMoNumber(e.target.value)} />
        {errors?.moNumber?.type === "pattern" && (
        <p className="error">Enter Number only</p>  )}
        {errors?.moNumber?.type === "required" && <p className="error">This field is required</p>}
        <input type="text" placeholder="Email"  {...register("email", { pattern:  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,required: true })} onChange={(e)=>setEmail(e.target.value)} />
        {errors?.email?.type === "pattern" && (
        <p className="error">Enter Valid Email</p>)}
        {errors?.email?.type === "required" && <p className="error">This field is required</p>}
        <input type="text" placeholder="Address" {...register("address", { required: true })} onChange={(e)=>setAddress(e.target.value)} />
        {errors?.address?.type === "required" && <p className="error">This field is required</p>}
        <button type="submit" className="button">Add User</button>
        </div>
    </form>
   
    <div className="data-container">
    <table cellPadding="0" cellSpacing="0" border="0">
      <thead className="t-header">
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Mobile Number</th>
          <th>Email</th>
          <th>Address</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        { arr.map((data,index)=>{
        return(
          <tr key={index}>
          <td>{data.id}</td>
          <td>{data.username} </td>
          <td>{data.moNumber}</td>
          <td>{data.email}</td>
          <td>{data.address}</td>
          <td><button onClick={()=>onDelete(data.id)}><i className="far fa-trash-alt"></i></button></td>
          </tr>
         )
        })}      
      </tbody>
      </table>

    </div>
    </div>
    </div>
    
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