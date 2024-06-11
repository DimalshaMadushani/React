import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './Counter'
import QuoteFetcher from './QuoteFetcher'
import QuoteFetcherLoader from './QuoteFetcherLoader'
import ProfileSearchForm from './ProfileSearchForm'
import ProfileViewerWithSearch from './ProfileViewerWithSearch.jsx'
function App() {
  

  return (
    <>
      {/* /<Counter/> */}
      {/* <QuoteFetcher/> */}
      {/* <QuoteFetcherLoader/> */}
      {/* <ProfileSearchForm/> */}
      <ProfileViewerWithSearch/>

    </>
  )
}

export default App
