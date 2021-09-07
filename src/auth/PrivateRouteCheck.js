import { useEffect } from "react"
import { useRouter } from "next/router"
import { useUser } from "./useUser"
import privateRoutes from './privateRoutes.json'


export const PrivateRouteCheck = ({children}) => {
    const {isLoading, user} = useUser()
    const router = useRouter()

    useEffect(() => {
        privateRoutes.forEach( route => {
            console.log('compare ', router.pathname, route);
            if ( router.pathname === route) return
        })
        if (!(user || isLoading)) {
            router.push('/signin')
        }
        console.log('PrivateRoute auth.currentUser', user);

    }, [user, isLoading])

    return !user
            ? <div>Checking...</div>
            : <>{children}</>
}