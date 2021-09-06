import { useRouter } from 'next/router'
import { PrivateRouteCheck } from '../../auth'
import Head from 'next/dist/next-server/lib/head'


export default function ClubNamePage() {
    const { query } = useRouter()
    return (
        <PrivateRouteCheck>
            <Head>
                <title>{ query.clubname } Book Club</title>
            </Head>
            <p>{ query.clubname }</p>
        </PrivateRouteCheck>
    )
}
