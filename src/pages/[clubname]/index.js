import Head from 'next/dist/next-server/lib/head'
import { useRouter } from 'next/router'
import { isPageAuthed } from '../../auth'

export default function ClubNamePage() {
    const { query } = useRouter()

    return (
        <>
            <Head>
                <title>{ query.clubname } Book Club</title>
            </Head>
            <p>{ query.clubname }</p>
        </>
    )
}

ClubNamePage.isAuthed = isPageAuthed