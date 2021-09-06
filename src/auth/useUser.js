import { useState, useEffect } from "react"
import { getAuth } from 'firebase/auth'

export const useUser = () => {
    const auth = getAuth()

    const [userInfo, setUserInfo] = useState(() => {
        const user = auth.currentUser
        const isLoading = !user
        return { isLoading, user }
    })

    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            setUserInfo({ isLoading: false, user })
        })
    }, [])

    return userInfo
}

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  //const uid = user.uid;