import { route } from 'next/dist/next-server/server/router'
import { useRouter } from 'next/router'
import Layout from '../../common/Layout';


export default function ClubNamePage() {
    const { query } = useRouter()
    return (
        <Layout>
            <p>{ query.clubname }</p>
        </Layout>
    )
}
