import mongoose from 'mongoose'

/* BookSchema will correspond to a collection in your MongoDB database. */
const BookSchema = new mongoose.Schema({
/*name: {
  //The name of this Book
  type: String,
  required: [true, 'Please provide a name for this Book.'],
  maxlength: [20, 'Name cannot be more than 60 characters'],
},*/
    "id": { type: Number },
    "title": { type: String },
    "author": {
      "id": { type: Number },
      "name": { type: String }
    },
    "image_url": { type: String },
    "small_image_url": { type: String },
    "goodreads": {
      "id": { type: Number, maxlength: [10] }, // 6 digits
      "books_count": { type: Number },
      "ratings_count": { type: Number },
      "text_reviews_count": { type: Number },
      "original_publication_year": { type: Number, maxlength: [4] }, // 4 digits
      "original_publication_month": { type: Number },
      "original_publication_day": { type: Number },
      "average_rating": { type: Number }
    },
    "club": {
      "id": { type: Number },
      "initiator_id": { type: Number },
      "votes": { type: Number },
      "reading": { type: Boolean },
      "rating": { type: Number },
      "meeting_date": { type: Date },
      "meeting_involved": { type: Array },
      "meeting_notes": { type: String },
      "notes": { type: String }
    }
})

export default mongoose.models.Book || mongoose.model('Book', BookSchema)
