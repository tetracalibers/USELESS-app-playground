import React, { createContext, useContext, useState } from 'react'

const UserOptionsContext = createContext()
export const useUserOptions = () => useContext(UserOptionsContext)

const UserOptionsProvider = ({ children }) => {
  const [registeredSingDate, setRegisteredSingDate] = useState([])
  const [registeredArtist, setRegisteredArtist] = useState([])
  const [registeredSong, setRegisteredSong] = useState([])

  return (
    <UserOptionsContext.Provider
      value={{
        registeredSingDate,
        setRegisteredSingDate,
        registeredArtist,
        setRegisteredArtist,
        registeredSong,
        setRegisteredSong,
      }}
    >
      {children}
    </UserOptionsContext.Provider>
  )
}

export default UserOptionsProvider
