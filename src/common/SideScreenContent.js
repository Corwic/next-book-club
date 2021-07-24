import { BookDetails } from '../books'


export default function SideScreenContent({ type, id }) {
  return (
      <>
        {type ? <BookDetails id={ id }/> : null }
      </>
  )
}
