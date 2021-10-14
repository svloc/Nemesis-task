import React,{useState} from "react";
import Login from "./Login";
import "./style.css";
import {Switch ,Route,Redirect} from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import Register from "./components/register";
import PrivateRoute from "./components/privateRoute";
export default function App() {
  // const [token,setToken ]=useState("")
  // if(!token){
  //   return <Login setToken={setToken}/>
  // }
  return (
    <Switch>
      <Route exact  path="/" component={Login}/>
      <Route exact  path="/register" component={Register}/>
      {/* <Route path="/dashboard" component={Dashboard}/> */}
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    </Switch>
  );
}
