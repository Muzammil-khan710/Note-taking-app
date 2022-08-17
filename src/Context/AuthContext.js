import { createContext, useContext, useState } from "react"
import axios from "axios"

const authContext =  createContext()

const useAuth = () => useContext(authContext)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,)
  
    const [token, setToken] = useState(localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,)

    const login = async (e, email, password) => {

      try {
        const {data} = await axios.post(`/api/auth/login`, {
          email,
          password
        });
     
        setUser(data.foundUser)
        setToken(data.encodedToken)
        localStorage.setItem("token", JSON.stringify(data.encodedToken))
        localStorage.setItem("user", JSON.stringify({ _id : data.foundUser._id, email : data.foundUser.email, firstName : data.foundUser.firstName, lastName : data.foundUser.lastName}))

      } catch (error) {
        console.log({error});
      }
    };

    return(
        <authContext.Provider value={{login}}>
            {children}
        </authContext.Provider>
    )
}

export { AuthProvider, useAuth }
