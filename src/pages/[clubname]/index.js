import { useRouter } from 'next/router'
import Head from 'next/dist/next-server/lib/head'
import { Layout } from '../common'
import { useUser } from '../../auth/useUser'



export default function ClubNamePage() {
    const { query } = useRouter()
    const { isLoading } = useUser()

    if (isLoading) return <p>Loading...</p>

    return (
        <Layout>
            <Head>
                <title>{ query.clubname } Book Club</title>
            </Head>
            <p>{ query.clubname }</p>
        </Layout>
    )
}
