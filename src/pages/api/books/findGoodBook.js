import axios from 'axios'
import parser from 'fast-xml-parser'



export default async function handler(req, res) {
  const { method, query } = req
  const bookSearchQuery = query.s

  const key = process.env.GOODREADS_KEY
  const secret = process.env.GOODREADS_SECRET

  //await dbConnect()
  //switch (method) {
  //  case 'GET':
      try {
        //let books
        const rawRes = await axios(`https://www.goodreads.com/search.xml?key=${key}&q=${bookSearchQuery}`).then(
          result => parser.parse( result.data )
        )
        const books = rawRes.GoodreadsResponse.search.results
        //console.log('book', books);
        res.status(200).json({ success: true, data: books })
      } catch (error) {
        res.status(400).json({ success: false, data: error })
      }
  //    break
  //  default:
  //    res.status(400).json({ success: false })
  //    break
  //}
}
// https://www.goodreads.com/search.xml?key=DQ4OR5OKacE3IhLmDBA&q=dune
