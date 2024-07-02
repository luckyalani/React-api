import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('/dashboard'));

const Lazyloading = () => {
  return (
    <>

<div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
    
       
    </>
  )
}

export default Lazyloading