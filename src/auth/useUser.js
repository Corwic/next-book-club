import { useState, useEffect } from "react"
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const useUser = () => {
    const auth = getAuth()

    const [userInfo, setUserInfo] = useState(() => {
        const user = auth.currentUser
        const isLoading = !user
        return { isLoading, user }
    })

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (user) console.log('useUser logged in') 
            else console.log('useUser logged out');
            setUserInfo({ isLoading: false, user })
        })
    }, [])

    return userInfo
}

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  //const uid = user.uid;