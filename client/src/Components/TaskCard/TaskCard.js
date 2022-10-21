import React from 'react'
import { SelectByStatus } from '../../API/APIRequest'
import { deleteToDo } from '../helper/Delete/DeleteModel'
import { UpdateAleart } from '../helper/UpdateAleart/UpdateAleart'

const TaskCard = ({item}) => {
  
  const DeleteItem=(id)=>{
    deleteToDo(id).then(result=>{
      if(result===true){
        if(item.status==="New"){
          SelectByStatus("New")
        }else if(item.status==="Completed"){
          SelectByStatus("Completed")
        }
        else if(item.status==="Progress"){
          SelectByStatus("Progress")
        }
        else{
          SelectByStatus("Canceled")
        }
      }
    })
  }
  const UpdateStatus=(id,status)=>{
    UpdateAleart(id,status).then(result=>{
      if(result===true){
        if(item.status==="New"){
          SelectByStatus("New")
        }else if(item.status==="Completed"){
          SelectByStatus("Completed")
        }
        else if(item.status==="Progress"){
          SelectByStatus("Progress")
        }
        else{
          SelectByStatus("Canceled")
        }
      }
    })
  }
  return (
    <div className="todo__card">
                      
                      <div className="todo__card-bottom">
                        <h4>{item.title}</h4>
                        <p className='todo__description'>{item.description}</p>
                        <div className='todo__card-other'>
                          <div className='todo__card-icons'>
                          <p>
                          <i className="ri-calendar-2-line"></i>
                            {item.createdDate}
                          </p>
                          <p><i onClick={UpdateStatus.bind(this,item._id,item.status)} className="ri-edit-2-line task__edit"></i></p>
                          <p>
                          
                          <i onClick={DeleteItem.bind(this,item._id)} className="ri-delete-bin-5-line task__delete"></i>
                            
                          </p>
                          </div>
                          <span className='task__status' style={item.status==="New"? {background:"rgb(230, 252, 178)"}:item.status==="Completed"? {background:"rgb(151, 255, 174)"}:item.status==="Progress"? {background:"rgb(82, 242, 253)"}:{background:"rgb(253, 82, 82)"}}>{item.status}</span>
                        </div>
                      </div>
          </div>
  )
}

export default TaskCard