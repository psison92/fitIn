import mongoose from "mongoose"

const Schema = mongoose.Schema

const gymSchema = new Schema({
  gymName: String,
  city: String,
  state: String,
  image: String,
  yelpUrl: String,
  rating: Number,
}, {
  timestamps: true
})

const reviewSchema = mongoose.Schema({
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
  gym: gymSchema,
  title: String,
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5},
  recommend: Boolean,
}, {
  timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)

export {
  Review
}