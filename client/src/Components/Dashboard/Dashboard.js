import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SummaryRequest } from '../../API/APIRequest'
import SingleCard from '../Card/SingleCard'

const Dashboard = () => {
  useEffect(()=>{
    SummaryRequest()
  },[]);
  let summaryData=useSelector((state)=>state.summary.value)

  return (
    <div className='dashboard'>
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          {
            summaryData.map((item,i)=>(<SingleCard key={i} item={item}/>))
          }
       
          
        </div>



      </div>
      
    </div>
  )
}

export default Dashboard