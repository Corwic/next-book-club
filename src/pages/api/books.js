// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const books = require("../../data/books.json")

export default (req, res) => {
  res.status(200).json(books)
}
