import { useRouter } from 'next/router'
import { Layout } from '../common'

export const isPageAuthed = page => {
    const router = useRouter()
    console.log('ClubNamePage.isAuthed', router);
    const isAuthed = !!page.props.user
    const isLoading = page.props.isLoading
    if (isLoading) return <div>Loading...</div>
    if (!isAuthed && !router.pathname === '/') {
        router.push('/signin')
    }
    return (
        <Layout isAuthed={isAuthed}>
            {page}
        </Layout>
    )
}