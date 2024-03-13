import {Suspense} from 'react';

const lazyLoad = (component: any) => {
  return <Suspense>{component}</Suspense>;
};
export default lazyLoad;
