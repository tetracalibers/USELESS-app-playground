import React from 'react'
import SetlistProvider from './providers/SetlistProvider'
import EditDiffProvider from './providers/EditDiffProvider'
import Top from './components/pages/Top'

const App = () => {
  return (
    <SetlistProvider>
      <EditDiffProvider>
        <Top />
      </EditDiffProvider>
    </SetlistProvider>
  )
}

export default App
