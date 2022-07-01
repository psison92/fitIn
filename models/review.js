import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = mongoose.Schema({
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
  title: String,
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5},
}, {
  timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)

export {
  Review
}