import mongoose from 'mongoose'

/* ClubSchema will correspond to a collection in your MongoDB database. */
const ClubSchema = new mongoose.Schema({
/*name: {
  //The name of this Club
  type: String,
  required: [true, 'Please provide a name for this Club.'],
  maxlength: [20, 'Name cannot be more than 60 characters'],
},*/
    "gr_id": { type: Number },
    "title": { type: String },
    "slug": { type: String }
})

export default mongoose.models.Club || mongoose.model('Club', ClubSchema)
