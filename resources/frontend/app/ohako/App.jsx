import React from 'react'
import SetlistProvider from './providers/SetlistProvider'
import Top from './components/pages/Top'

const App = () => {
  return (
    <SetlistProvider>
      <Top />
    </SetlistProvider>
  )
}

export default App
