import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { SelectByStatus } from '../../API/APIRequest'
import TaskCard from '../TaskCard/TaskCard'

const NewTask = () => {
  const[searchKey,setSearchKey]=useState()
 
  useEffect(()=>{
    SelectByStatus("New")
  },[])



  const NewTaskData=useSelector((state)=>state.task.New)
  return (
    <div className='dashboard'>
      <div className="dashboard__wrapper">
        <div className="dashboard__search__task">
          <div className="task__status__title">
            <h2>New Task</h2>
          </div>
          <div className="task__search__bar">
          <input  onChange={(e)=>setSearchKey(e.target.value)} type="text" placeholder='search or type'/>
          <span><i class="ri-search-line"></i></span>
          </div>
        </div>
      <div className="todo__task-wrapper">
        {
          NewTaskData.map((item,i)=>(
            <TaskCard key={i} item={item}/>
          ))
        }

</div>
      </div>
    </div>
  )
}

export default NewTask