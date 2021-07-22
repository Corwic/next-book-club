//import dbConnect from '../../../utils/dbConnect'
//import Book from '../../../books/BookSchema'
import axios from 'axios'

export default async function handler(req, res) {
  console.log('hi', process.env.GOODREADS_KEY);

  const { method } = req
  const key = process.env.GOODREADS_KEY
  const secret = process.env.GOODREADS_SECRET
  console.log('hi', process.env.GOODREADS_KEY);
  //await dbConnect()
  switch (method) {
    case 'GET':
      try {
        const books = await axios(`https://www.goodreads.com/search.xml?key=${key}&q=dune`)
        res.status(200).json({ success: true, data: books })
      } catch (error) {
        res.status(400).json({ success: false, data: error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
