import { useEffect } from "react"
import { useRouter } from "next/router"
import { useUser } from "./useUser"


export const PrivateRouteCheck = ({children}) => {
    const {isLoading, user} = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!(user || isLoading)) {
            router.push('/signin')
        }
        console.log('PrivateRoute auth.currentUser', user);

    }, [user, isLoading])

    return !user
            ? <div>Checking...</div>
            : <>{children}</>
}