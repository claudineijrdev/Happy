import React, { createContext } from 'react'

interface User {
     id: number,
     name: string,
     email:string,
     token: string,
     signedIn: boolean,
}

const InitialUser: User = {
     id:0,
     name:'',
     email:'',
     token:'',
     signedIn: false,
}
const UserContext = createContext<User>(InitialUser)


export const UserProvider: React.FC = ({children}) =>(
     <UserContext.Provider value={InitialUser}>
          {children}
     </UserContext.Provider>

)


export default UserContext