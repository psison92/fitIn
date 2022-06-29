import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = mongoose.Schema({
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
  title: String,
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5},
}, {
  timestamps:true
})

const gymSchema = new Schema({
  name: {type: String, unique: true},
  city: String,
  state: String,
  groupClasses: Boolean,
  category: String,
  reviews: [reviewSchema],
  creator: {type: Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const Gym = mongoose.model('Gym', gymSchema)

export {
  Gym
}