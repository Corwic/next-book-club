import dbConnect from '../../../utils/dbConnect'
import Club from '../../../models/Club'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const clubs = await Club.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: clubs })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const clubs = await Club.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: clubs })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
