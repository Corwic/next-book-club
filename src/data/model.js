{
  books: {
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
  },
  readers: {
    "name": { type: String },
    "image_url": { type: String },
    "goodreads_id": { type: Number },
    "google_id": { type: Number }
  },
  clubs: {
    "title": { type: String },
    "readers": { type: Array },
    "books_data": { type: Array }
  },
  data: {
    "club_id": { type: Number },
    "book_id": { type: Number },
    "initiator_id": { type: Number },
    "votes": { type: Number },
    "reading": { type: Boolean },
    "rating": { type: Number },
    "meeting_date": { type: Date },
    "meeting_involved": { type: Array },
    "meeting_notes": { type: String },
    "review": { type: String }
  }
}
