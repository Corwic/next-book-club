import mongoose from 'mongoose'

/* ReaderSchema will correspond to a collection in your MongoDB database. */
const ReaderSchema = new mongoose.Schema({
/*name: {
  //The name of this Reader
  type: String,
  required: [true, 'Please provide a name for this Reader.'],
  maxlength: [20, 'Name cannot be more than 60 characters'],
},*/
    "name":                 String,
    "fullname":             String,
    "displayname":          String,
    "email":                String,
    "id":                   String,
    "clubs":                [String],
    "reader_goodreads_id":  String 
})

export default mongoose.models?.Reader || mongoose.model('Reader', ReaderSchema)
