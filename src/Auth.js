import React, { usestate, useEffect} from 'react'
import app from './firebase'

export const AuthContext = React.createContext();


const AuthProvider = ( {children} ) => {

const [currentUser, setCurrentUser] = usestate(null);


useEffect(() => {
   app.auth().onAuthStateChanged(setCurrentUser);
},[]);


    return (
        <AuthContext.Provider value = {{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider