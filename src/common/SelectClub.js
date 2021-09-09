import { useRouter } from 'next/router'
import styled from 'styled-components'

const ButtonsContainer = styled.div`
    display: grid;
    grid-row-gap: 1rem;
`
const SignInButton = styled.button`
    background: none;
    border: solid 1px;
    &.disabled {
        color: grey;
        border-color: grey;
    }
`
const ButtonList = styled.ul`
    padding:0;
    & > li { 
        list-style: none;
        background: none;
        border: solid 1px;
        &.disabled {
            color: grey;
            border-color: grey;
        }
    }
`

export function SelectClub({ clubs }) {
    const router = useRouter()
    const selectClub = (clubSlug) => { router.push(`/${clubSlug}`) }
    console.log('clubs', clubs);

    return (
      <>
{/*         <Head>
          <title>Sign in — Book Club App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head> */}
      <h2>Select a club</h2>
      {clubs?.length ? 
        <ButtonList>{clubs.map(club => 
          <li key={club.slug}
              onClick={() => selectClub(club.slug)}>
            {club.title}
          </li>)}
        </ButtonList>
        : `It's time to create a club`
      }
      <ButtonsContainer>
          <SignInButton 
              className="disabled"
              onClick={()=>push("/create/a-club")}
              >Create a new club
          </SignInButton>
      </ButtonsContainer>
      </>
    )
  }