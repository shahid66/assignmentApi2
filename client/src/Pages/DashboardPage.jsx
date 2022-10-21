import React, { Fragment, lazy, Suspense } from 'react'
import Layout from '../Components/Layout/Layout'
import LazyLoader from '../Components/Layout/LazyLoader'
const Dashboard=lazy(()=>import('../Components/Dashboard/Dashboard'))

const DashboardPage = () => {

  return (
   <Fragment>
     <Layout>
     <Suspense fallback={<LazyLoader/>}>
        <Dashboard/>
        
     </Suspense>
    </Layout>
    {/* <DeleteModel/> */}
 
   </Fragment>
  )
}

export default DashboardPage
