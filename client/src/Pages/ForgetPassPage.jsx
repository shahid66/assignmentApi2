import React, { lazy, Suspense } from 'react'
import LazyLoader from '../Components/Layout/LazyLoader'
const ForgetPass=lazy(()=>import('../Components/ForgetPass/ForgetPass'))

const ForgetPassPage = () => {
  return (
    
    <Suspense fallback={<LazyLoader/>}>
           <ForgetPass/>
    </Suspense>
    
    
  )
}

export default ForgetPassPage