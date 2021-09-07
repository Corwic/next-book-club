import { useEffect } from "react"
import { useRouter } from "next/router"
import { useUser } from "./useUser"

import { useSelector, useDispatch } from 'react-redux'
import { authSignIn, authSignOut } from '../common/commonSlice'

export const PrivateRouteCheck = ({children}) => {
    const {isLoading, user} = useUser()
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!(user || isLoading)) {
            router.push('/signin')
        }
        console.log('PrivateRoute auth.currentUser', user);
        dispatch( authSignIn( user ) )

    }, [user, isLoading])

    return !user
            ? <div>Checking...</div>
            : <>{children}</>
}