import React, { Fragment, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CreatePasswordRequest } from '../../API/APIRequest'
import { getEmail, getOTP } from '../../helper/SessionHelper'
import { IsEmpty } from '../helper/Delete/FormHelper/FormHelper'

const CreatePassword = () => {
  let navigate=useNavigate()
    let passRef,confirmPassRef=useRef()
    let email=getEmail()
      let otp=getOTP()
    const onSubmit=()=>{
      let pass=passRef.value;
      let conf=confirmPassRef.value
      console.log(pass,conf)
      

      if(IsEmpty(pass)){
        toast.error('Password required',{
          position: "bottom-center"})
      }else if(IsEmpty(conf)){
        toast.error('Password Confirm required',{
          position: "bottom-center"})
      }
      else if(pass!==conf){
        toast.error('Password & Confirm Password Must same required',{
          position: "bottom-center"})
      }else{
        CreatePasswordRequest(email,otp,pass).then(result=>{
          if(result===true){
            navigate('/')
          }
        })
      }

    }
  return (
    <Fragment>
    <div className='login__wrapper'>
      <div className="login__form__wrapper">
        <div className="login__form">
            <h2>Create New Password</h2>
          <div className="login__field">
            <input defaultValue={email} type="text" />
            <input ref={(input)=>passRef=input} type="text" placeholder='New Password'/>
            <input ref={(input)=>confirmPassRef=input} type="text" placeholder='Confirmed Password'/>
            
            <input onClick={onSubmit} className='login__btn' type="button" value="Next" />
          </div>
          
          
        </div>
      </div>
    </div>
      
    </Fragment>
  )
}

export default CreatePassword