import React, { lazy, Suspense } from 'react'
import Layout from '../Components/Layout/Layout'
import LazyLoader from '../Components/Layout/LazyLoader'
const NotFound=lazy(()=>import('../Components/NotFound/NotFound'))

const NotFoundPage = () => {
  return (
    <Layout>
<Suspense fallback={<LazyLoader/>}>
       <NotFound/>
       </Suspense>

</Layout>
  )
}

export default NotFoundPage