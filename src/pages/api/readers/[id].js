import dbConnect from '../../../utils/dbConnect'
import Reader from '../../../readers/ReaderSchema'
import Club from '../../../clubs/ClubSchema'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const reader = await Reader.findOne({id})
        const populatedReader = await Club.populate(reader, {path:'clubs'}, )
        // const reader = await Reader.findById(id)
        // if (!reader) {
        //   return res.status(400).json({ success: false })
        // }
        res.status(200).json({ success: true, data: populatedReader })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const reader = await Reader.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!reader) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: reader })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedReader = await Reader.deleteOne({ _id: id })
        if (!deletedReader) {
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
