import mongoose from 'mongoose'

/* BookGRSchema will correspond to a collection in your MongoDB database. */
const BookGRSchema = new mongoose.Schema({
/*name: {
  //The name of this BookGR
  type: String,
  required: [true, 'Please provide a name for this BookGR.'],
  maxlength: [20, 'Name cannot be more than 60 characters'],
},*/
  "id": { type: Number, maxlength: [10] }, // 6 digits
  "books_count": { type: Number },
  "ratings_count": { type: Number },
  "text_reviews_count": { type: Number },
  "original_publication_year": { type: Number, maxlength: [4] }, // 4 digits
  "original_publication_month": { type: Number },
  "original_publication_day": { type: Number },
  "average_rating": { type: Number },
  "best_book": {
    "id": { type: Number },
    "title": { type: String },
    "author": {
      "id": { type: Number },
      "name": { type: String }
    },
    "image_url": { type: String },
    "small_image_url": { type: String },
  }
})

export default mongoose.models.BookGR || mongoose.model('BookGR', BookGRSchema)
