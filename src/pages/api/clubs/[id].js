import dbConnect from '../../../utils/dbConnect'
import Club from '../../../models/Club'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const club = await Club.findById(id)
        if (!club) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: club })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const club = await Club.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!club) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: club })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedClub = await Club.deleteOne({ _id: id })
        if (!deletedClub) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
