import React, {createContext, useState} from 'react'

export const UserContext = createContext({})


const UserProvider = ({children}) => {
    const [UserData, setUserData] = useState({})
  return (
    <div>
    <UserContext.Provider value={{UserData, setUserData}}>
        {children}
    </UserContext.Provider> 
    </div>
    
  )
}

export default UserProvider