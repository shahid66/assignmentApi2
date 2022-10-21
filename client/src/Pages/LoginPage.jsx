import React, { lazy, Suspense } from 'react'
import LazyLoader from '../Components/Layout/LazyLoader'
const Login=lazy(()=>import('../Components/Login/Login'))
const LoginPage = () => {
  return (
    <Suspense fallback={<LazyLoader/>}>
       <Login/>
       
    </Suspense>
  )
}

export default LoginPage
