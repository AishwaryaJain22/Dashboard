import React from 'react';
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';
import qs from 'qs';
import { Button } from 'reactstrap';

export const reposApi = axios.create({
  baseURL:'localhost-3000'
});

const Login = () => {
  const [mobile,setMobile] = useState("")
  const [password,setPassword] = useState("")
  let navigate = useNavigate();
  
  
  const routeChange = (dispatch) =>{ 
    const requestBody = {
      mobile: mobile,
      password: password,
      is_email: 0,
      grant_type: 'password',
      client_secret:'hgefewyufgewuyfgew',
      client_id: 'gsdeuefheuf'
    };

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    };

    reposApi
    .post('login', qs.stringify(requestBody), config)
    .then(response => {
      if(response.status === 200){
        localStorage.setItem('isAuthenticated', true)
        localStorage.setItem('accessToken', response?.data?.access_token)
        localStorage.setItem('refreshToken', response?.data?.refresh_token)
        localStorage.setItem('user', JSON.stringify(response?.data?.user_details))
        navigate('/customer')
      }
    })
    .catch(error => {
      if (error?.response?.status === 401) {
        console.log("Something Went Wrong");
      }
      if (error?.response?.status === 406) {
       alert("you enter wrong Credintials");
       
      }
    });
   
  }

  return (
    <div className='col-sm-6 offset-sm-3'>
      <h1>Signup Here</h1>
      <input  type="text"  value={mobile} onChange={(e)=>setMobile(e.target.value)} className='form-control' placeholder='Enter Name'/>
      <br/>
      <input  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder='Enter Password'/>
      <br/>
      <button onClick={routeChange} className ='btn btn-primary'>SignIn</button>
    </div>
  );
}

export default Login;
