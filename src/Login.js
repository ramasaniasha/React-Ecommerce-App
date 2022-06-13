import React, { useState, useEffect } from 'react';
// import axios from './Api/axios';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';


export default function Login({ setUser }) {
  const [emailid, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  const user_login = { emailid, pwd }
  const dispatch = useDispatch();
  const login_details = useSelector((state) => state.userReducer.data)

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePwd = (e) => {
    setPwd(e.target.value);
  }
  function handleRegister() {
    navigate("/register");
  }
  const handleApi = (e) => {

    dispatch(loginUser(user_login));
    if (login_details) {
      navigate('/home');
    }
   }
 
  return (
    <div className='col-sm-6 offset-sm-3 padding-top-bottom-50'>
      <h3>Login Page</h3>
      <hr />
      <input type="email" value={emailid} onChange={handleEmail}
        className="form-control" placeholder="email" />
      <br />
      <input type="password" value={pwd} onChange={handlePwd} className="form-control" placeholder="password" />
      <br />
      <button onClick={handleApi} className='btn btn-primary'>Signin</button>
      <div>
        <br />
        <p>New user
          <a onClick={handleRegister} href="/register" className='mt-2'>Register</a></p>
      </div>
    </div>
  )
}
