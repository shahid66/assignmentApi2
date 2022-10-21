import React, { lazy, Suspense } from 'react'
import Layout from '../Components/Layout/Layout'
import LazyLoader from '../Components/Layout/LazyLoader'
const NewTask=lazy(()=>import('../Components/NewTask/NewTask'))

const NewTaskPage = () => {
  return (
<Layout>
<Suspense fallback={<LazyLoader/>}>
        <NewTask/>
     </Suspense>

</Layout>
  )
}

export default NewTaskPage
