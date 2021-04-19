import mongoose from 'mongoose'

/* BookSchema will correspond to a collection in your MongoDB database. */
const BookSchema = new mongoose.Schema({
/*name: {
  //The name of this Book
  type: String,
  required: [true, 'Please provide a name for this Book.'],
  maxlength: [20, 'Name cannot be more than 60 characters'],
},*/

  "author_n_title": { type: String },
  "initiator_id": { type: Number },

  "author": { type: String },
  "title": { type: String },
  "year": { type: Number },
  "book_goodreads_id": { type: Number },
  "author_goodreads_id": { type: Number },

  "votes": { type: Array },
  "votes_avg": { type: Number },

  "reading": { type: Boolean },
  "meeting_date": { type: Date },
  "meeting_involved": { type: Array },
  "meeting_notes": { type: String },
  "rating": { type: Array },
  "rating_avg": { type: Number },
  "review": { type: String }
})

export default mongoose.models.Book || mongoose.model('Book', BookSchema)
