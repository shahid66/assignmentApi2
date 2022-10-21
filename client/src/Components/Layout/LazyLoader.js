import React, { Fragment } from 'react'

const LazyLoader = () => {
  return (
    <Fragment>
<div className={"loadingOverlay"}>
      <div className="line__progress">
        <div className="indeterminate"></div>
      </div>
    </div>
</Fragment>
  )
}

export default LazyLoader