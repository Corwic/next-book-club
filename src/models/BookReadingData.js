import mongoose from 'mongoose'

/* BookSchema will correspond to a collection in your MongoDB database. */
const BookReadingDataSchema = new mongoose.Schema({
/*name: {
  //The name of this Book
  type: String,
  required: [true, 'Please provide a name for this Book.'],
  maxlength: [20, 'Name cannot be more than 60 characters'],
},*/

    "club_id": { type: Number },
    "book_id": { type: Number },
    "book_goodreads_id": { type: Number },
    "initiator_id": { type: Number },
    "initiator_goodreads_id": { type: Number },
    "votes": { type: Array },
    "reading": { type: Boolean },
    "rating": { type: Number },
    "meeting_date": { type: Date },
    "meeting_involved": { type: Array },
    "meeting_notes": { type: String },
    "review": { type: String }
})

export default mongoose.models.BookReadingData || mongoose.model('BookReadingData', BookReadingDataSchema)
