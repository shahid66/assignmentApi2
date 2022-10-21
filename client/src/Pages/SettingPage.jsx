import React, { lazy, Suspense } from 'react'
import Layout from '../Components/Layout/Layout'
import LazyLoader from '../Components/Layout/LazyLoader'

const Profile=lazy(()=>import('../Components/Profile/Profile'))

const SettingPage = () => {
  return (
    <Layout>
    <Suspense fallback={<LazyLoader/>}>
           <Profile/>
           </Suspense>
    
    </Layout>
  )
}

export default SettingPage
