import React, { lazy, Suspense } from 'react'
import Layout from '../Components/Layout/Layout'
import LazyLoader from '../Components/Layout/LazyLoader'
const Cancele=lazy(()=>import('../Components/Cancele/Cancele'))

const CanceledPage = () => {
  return (
<Layout>
<Suspense fallback={<LazyLoader/>}>
       <Cancele/>
       </Suspense>

</Layout>
  )
}

export default CanceledPage
