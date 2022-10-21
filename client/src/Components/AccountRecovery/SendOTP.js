import React, { Fragment, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { RecoveryEmailRequest } from '../../API/APIRequest'
import { IsEmail } from '../helper/Delete/FormHelper/FormHelper'

const SendOTP = () => {
  let navigate=useNavigate()
    let emailRef=useRef()
    const onSubmit=()=>{
        let email=emailRef.value
        if(IsEmail(email)){
            toast.error('email required',{
              position: "bottom-center"})
          }else{
            RecoveryEmailRequest(email).then(result=>{
              if(result===true){
                navigate('/verifyOTP')
              }
            })
        }
    }
  return (
    <Fragment>
    <div className='login__wrapper'>
      <div className="login__form__wrapper">
        <div className="login__form">
            <h2>Enter Email</h2>
          <div className="login__field">
            <input ref={(input)=>emailRef=input} type="text" />
            
            <input onClick={onSubmit} className='login__btn' type="button" value="Next" />
          </div>
          
          
        </div>
      </div>
    </div>
      
    </Fragment>
  )
}

export default SendOTP