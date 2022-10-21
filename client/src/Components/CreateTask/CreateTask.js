import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CreateTaskRequest } from '../../API/APIRequest';
import { IsEmpty } from '../helper/Delete/FormHelper/FormHelper';

const CreateTask = () => {
  let navigate=useNavigate()
  let titleRef,disRef=useRef();
  const onSubmit=()=>{
    let title=titleRef.value;
    let discription=disRef.value;
    if(IsEmpty(title)){
      toast.error('Title required',{
        position: "bottom-center"})
    }else if(IsEmpty(discription)){
      toast.error('Description required',{
        position: "bottom-center"})
    }else{
      CreateTaskRequest(title,discription).then(result=>{
        if(result===true){
          navigate('/newTask')
        }
      })
    }
  }
  return (
    <div className='dashboard'>
    <div className="dashboard__wrapper">
    <div className="create__task-wrapper">
        <div className="create__task-form">
            <div className="field">
                <h4>Create New Task</h4>
            <input ref={(input)=>titleRef=input} type="text" placeholder='Task Name'/>
            <textarea ref={(input)=>disRef=input} name="" id="" cols="30" rows="10" placeholder='Task Description'></textarea>
            <p className='p_input' onClick={onSubmit}><input type="button" value="Submit" /></p>
            </div>
        </div>
    </div>
    </div>
  </div>
  )
}

export default CreateTask