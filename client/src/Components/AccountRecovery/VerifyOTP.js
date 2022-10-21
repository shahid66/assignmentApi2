import React, { Fragment, useState } from 'react'
import ReactCodeInput from 'react-code-input'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { RecoveryVerifyOTPRequest } from '../../API/APIRequest'
import { getEmail } from '../../helper/SessionHelper'

const VerifyOTP = () => {
    const[OTP,setOTP]=useState("")
    let navigate=useNavigate()
    let Email=getEmail()
    let submitOTP=()=>{
        if(OTP.length===6){
            RecoveryVerifyOTPRequest(Email,OTP).then(result=>{
                if(result===true){
                  navigate('/createPassword')
                }
            })
        }else{
            toast.error("Must 6 digit OTP Enter")
        }
    }
  return (
    <Fragment>
    <div className='login__wrapper'>
      <div className="login__form__wrapper">
        <div className="login__form">
            <h2>OTP Code</h2>
          <div className="login__field OTP ">
          
      <ReactCodeInput inputStyle={{   fontFamily: 'monospace',
  
    borderRadius: '3px',
    fontSize: '16px',
    
    
    backgroundColor: 'black',
    color: 'lightskyblue',
    border: '1px solid lightskyblue'}} onChange={(value)=>setOTP(value)} type='number' fields={6} />
      <input onClick={submitOTP} className='login__btn' type="button" value="Next" />
          </div>
          
          
        </div>
      </div>
    </div>
      
    </Fragment>
   
  )
}

export default VerifyOTP
