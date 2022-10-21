
import Swal from "sweetalert2";
import { TaskDeleteRequest } from "../../../API/APIRequest";
export function deleteToDo(id){
  
return Swal.fire({
  title:'Are you sure?',
  text:"You won't be able to revert this!",
  icon:"warning",
  showCancelButton: true,
  confirmButtonColor:"#3085d6",
  cancelButtonColor:"#d33",
  confirmButtonText:"Yes Delete it !"
}).then((result)=>{
  if(result.isConfirmed){
   return TaskDeleteRequest(id).then(result=>{
      return result
    })
  }
})


  // <div className='modalBackground'>
  //       <div className="modalContainer">
  //       <div className="titleCloseBtn">
  //         <button>
  //           X
  //           {id}
  //         </button>
  //       </div>
            
  //           <div className="title">
  //               <h2>Are you sure?</h2>
  //           </div>
  //           <div className="body">
  //               <p>something</p>
  //           </div>
  //           <div className="footer">
  //               <button onClick={()=>console.log('ha')}>No</button>
  //               <button>Yes</button>
  //           </div>
  //       </div>
  //   </div>
}