import dbConnect from '../../../utils/dbConnect'
import Reader from '../../../readers/ReaderSchema'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const readers = await Reader.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: readers })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const reader = await Reader.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: reader })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
