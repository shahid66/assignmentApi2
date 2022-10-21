import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getProfileData, ProfileUpdateRequest } from '../../API/APIRequest';
import { getBase64, IsEmail, IsEmpty, IsMobile } from '../helper/Delete/FormHelper/FormHelper';

const Profile = () => {
  const[photoBs,setPhotoBs]=useState("")
  let emailRef,firstNameRef,lastNameRef,phoneRef,passwordRef,userImgView,userImgRef=useRef();
  useEffect(()=>{
    getProfileData()
  },[])
  let profile=useSelector((state)=>state.profile.value);
  const [view,setView]=useState('password')
  const handleViewPass=()=>{
    if(view==="password"){
      setView('text')
    }else{
      setView('password')
    }
  }
  const PreviewImg=()=>{
    let image=userImgRef.files[0]
    
    getBase64(image).then(result=>{
      userImgView.src=result
      setPhotoBs(result)
    })
  }
  let navigate=useNavigate()
  
  
  const onSubmit=()=>{
    let email=emailRef.value;
    let f_name=firstNameRef.value;
    let l_name=lastNameRef.value;
    let phone=phoneRef.value;
    let password=passwordRef.value;
    let photo=userImgView.src
    


   if(IsEmail(email)){
      toast.error('Email required',{
        position: "bottom-center"})
    }
    else if(IsEmpty(f_name)){
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
      console.log(email,f_name,l_name,phone,password, photo)
      ProfileUpdateRequest(email,f_name,l_name,phone,password,photo).then(result=>{
        if(result===true){
          navigate('/')
        }
      })
    }


  }

  
  return (
    <div className='dashboard'>
    <div className="dashboard__wrapper">
    <div className="dashboard__search__task">
       
        </div>

        <div className='profile__wrapper'>
    <div className="signup__form__wrapper">
      <div className="signup__form">
          <h2>Profile Update</h2>
          <div className="profile__img">
            <img ref={(input)=>userImgView=input} src={profile.photo} alt="" />
            <input onChange={PreviewImg} ref={(input)=>userImgRef=input} type="file"  placeholder='Email'/>
          </div>
        <div className="signup__field">
          
          <input defaultValue={profile.email} ref={(input)=>emailRef=input} type="text"  placeholder='Email'/>
          <input defaultValue={profile.firstName} ref={(input)=>firstNameRef=input} type="text" placeholder='First Name'/>
          <input defaultValue={profile.lastName} ref={(input)=>lastNameRef=input} type="text"  placeholder='Last Name' />
          <input defaultValue={profile.mobile} ref={(input)=>phoneRef=input} type="text" placeholder='Phone Number'/>
          <input defaultValue={profile.password} ref={(input)=>passwordRef=input} type={view}  placeholder='Password'/> <span onClick={handleViewPass}>view password</span>
          
         
          <input onClick={onSubmit} className='signup__btn' type="button" value="Update" />
         
        </div>
      </div>
    </div>
  </div>

        

    </div>
  </div>
  )
}

export default Profile