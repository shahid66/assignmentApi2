import React, { lazy, Suspense } from 'react'
import LazyLoader from '../Components/Layout/LazyLoader'
const Register=lazy(()=>import('../Components/Register/Register'))

const RegisterPage = () => {
  return (
    <Suspense fallback={<LazyLoader/>}>
       <Register/>
       {/* <ToastContainer /> */}
     </Suspense>
    
  )
}

export default RegisterPage
