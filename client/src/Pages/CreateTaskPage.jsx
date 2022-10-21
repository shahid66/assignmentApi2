import React, { lazy, Suspense } from 'react'
import Layout from '../Components/Layout/Layout'
import LazyLoader from '../Components/Layout/LazyLoader'
const CreateTask=lazy(()=>import('../Components/CreateTask/CreateTask'))

const CreateTaskPage = () => {
  return (
<Layout>
<Suspense fallback={<LazyLoader/>}>
       <CreateTask/>
       </Suspense>

</Layout>
  )
}

export default CreateTaskPage
