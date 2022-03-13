import React from 'react'
import SetlistProvider from './providers/SetlistProvider'
import EditDiffProvider from './providers/EditDiffProvider'
import AddTmpProvider from './providers/AddTmpProvider'
import SortProvider from './providers/SortProvider'
import Top from './components/pages/Top'

const App = () => {
  return (
    <SetlistProvider>
      <EditDiffProvider>
        <AddTmpProvider>
          <SortProvider>
            <Top />
          </SortProvider>
        </AddTmpProvider>
      </EditDiffProvider>
    </SetlistProvider>
  )
}

export default App
