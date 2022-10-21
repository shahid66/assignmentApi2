import React, { Fragment, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RegistrationRequest } from '../../API/APIRequest';
import { IsEmail, IsEmpty, IsMobile } from '../helper/Delete/FormHelper/FormHelper';

const Register = () => {
  let emailRef,firstNameRef,lastNameRef,phoneRef,passwordRef=useRef();
  let naviget=useNavigate()
  const handleSubmit=()=>{
    let email=emailRef.value;
    let f_name=firstNameRef.value;
    let l_name=lastNameRef.value;
    let phone=phoneRef.value;
    let password=passwordRef.value;

    if(IsEmail(email)){
      toast.error('email required',{
        position: "bottom-center"})
    }else if(IsEmpty(f_name)){
      toast.error('first name required',{
        position: "bottom-center"})
    }else if(IsEmpty(l_name)){
      toast.error('last name required',{
        position: "bottom-center"})
    }else if(IsMobile(phone)){
      toast.error('Phone Number required',{
        position: "bottom-center"})
    }else if(IsEmpty(password)){
      toast.error('Password required',{
        position: "bottom-center"})
    }else{
      RegistrationRequest(email,f_name,l_name,phone,password).then(result=>{
        
        if(result===true){
          
          naviget('/login')
          
        }else{
          
        }
      })
    }


  }
  return (
    <Fragment>
    <div className='signup__wrapper'>
    <div className="signup__form__wrapper">
      <div className="signup__form">
          <h2>Sign Up</h2>
        <div className="signup__field">
          <input ref={(input)=>emailRef=input} type="text"  placeholder='Email'/>
          <input ref={(input)=>firstNameRef=input} type="text" placeholder='First Name'/>
          <input ref={(input)=>lastNameRef=input} type="text"  placeholder='Last Name'/>
          <input ref={(input)=>phoneRef=input} type="text" placeholder='Phone Number'/>
          <input ref={(input)=>passwordRef=input} type="password"  placeholder='Password'/>
          
         
          <input onClick={handleSubmit} className='signup__btn' type="button" value="Sign Up" />
         
        </div>
        
        <p><Link to='/login'>Sign In</Link></p>
        <p><Link to='/forgetpass'>Forget Password</Link></p>
      </div>
    </div>
  </div>
      
    </Fragment>

  )
}

export default Register