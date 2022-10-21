import React, { Fragment, useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LoginRequest } from '../../API/APIRequest';
import { IsEmail, IsEmpty } from '../helper/Delete/FormHelper/FormHelper';

const Login = () => {
  let emailRef,passRef=useRef();
  const onSubmit=()=>{
    let email=emailRef.value;
    let password=passRef.value;
    console.log(email)
    if(IsEmail(email)){
      toast.error('email required',{
        position: "bottom-center"})
    }else if(IsEmpty(password)){
      toast.error('Password required',{
        position: "bottom-center"})
    }else{
      LoginRequest(email,password).then((result=>{
        if(result===true){
          window.location.href="/"
        }else{
          toast.error('Email or Password Not Match',{
            position: "bottom-center"})
        }
      }))
      
    }
    
  }
  return (
    <Fragment>
    <div className='login__wrapper'>
      <div className="login__form__wrapper">
        <div className="login__form">
            <h2>Sign In</h2>
          <div className="login__field">
            <input ref={(input)=>emailRef=input} type="text" />
            <input ref={(input)=>passRef=input} type="text" />
            <input onClick={onSubmit} className='login__btn' type="button" value="Login" />
          </div>
          <p><Link to='/register'>Sign Up</Link></p>
          <p><Link to='/sendOTP'>Forget Password</Link></p>
          
        </div>
      </div>
    </div>
      
    </Fragment>

  )
}

export default Login