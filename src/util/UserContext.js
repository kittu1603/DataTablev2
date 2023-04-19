import { Login } from '@mui/icons-material';
import React, {useState, createContext} from 'react'

export const AppContext = createContext(null)
const UserContext = ({children}) => {
    const[login, setLogin] = useState(false);
  return (
    <AppContext.Provider value={{login, setLogin}}>
        {children}
    </AppContext.Provider>
  )
}

export default UserContext