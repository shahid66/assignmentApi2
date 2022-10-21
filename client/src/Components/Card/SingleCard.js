import React from 'react'

const SingleCard = ({item}) => {

  return (
    <div className="single__card">
    <div className="card__content">
      <h4>{item._id} Tasks</h4>
      <span>{item.sum}</span>  
    </div>
    {/* <span className='card__icon'><i className={icon}></i></span> */}
    </div>
  )
}

export default SingleCard