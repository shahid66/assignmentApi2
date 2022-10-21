import React, { lazy, Suspense } from 'react'
import Layout from '../Components/Layout/Layout'
import LazyLoader from '../Components/Layout/LazyLoader'
const Complete=lazy(()=>import('../Components/Complete/Complete'))

const CompletedPage = () => {
  return (
  <Layout>

<Suspense fallback={<LazyLoader/>}>
<Complete/>
       </Suspense>
  </Layout>
  )
}

export default CompletedPage
