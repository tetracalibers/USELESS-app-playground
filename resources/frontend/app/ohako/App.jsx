import React from 'react'
import SetlistProvider from './providers/SetlistProvider'
import EditDiffProvider from './providers/EditDiffProvider'
import AddTmpProvider from './providers/AddTmpProvider'
import Top from './components/pages/Top'

const App = () => {
  return (
    <SetlistProvider>
      <EditDiffProvider>
        <AddTmpProvider>
          <Top />
        </AddTmpProvider>
      </EditDiffProvider>
    </SetlistProvider>
  )
}

export default App
