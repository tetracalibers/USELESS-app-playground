import React from 'react'
import SetlistProvider from './providers/SetlistProvider'
import EditDiffProvider from './providers/EditDiffProvider'
import AddTmpProvider from './providers/AddTmpProvider'
import SortProvider from './providers/SortProvider'
import UserOptionsProvider from './providers/UserOptionsProvider'
import Top from './components/pages/Top'

const App = () => {
  return (
    <SetlistProvider>
      <UserOptionsProvider>
        <EditDiffProvider>
          <AddTmpProvider>
            <SortProvider>
              <Top />
            </SortProvider>
          </AddTmpProvider>
        </EditDiffProvider>
      </UserOptionsProvider>
    </SetlistProvider>
  )
}

export default App
