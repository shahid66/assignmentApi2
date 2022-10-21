import React, { lazy, Suspense } from 'react'
import Layout from '../Components/Layout/Layout'
import LazyLoader from '../Components/Layout/LazyLoader'
const Inprogerss=lazy(()=>import('../Components/InProgress/Inprogerss'))

const InprogressPage = () => {
  return (
<Layout>
<Suspense fallback={<LazyLoader/>}>
       <Inprogerss/>
</Suspense>

</Layout>
  )
}

export default InprogressPage
