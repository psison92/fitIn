import mongoose from "mongoose"

const Schema = mongoose.Schema

const gymSchema = new Schema({
  name: {type: String, unique: true},
  city: String,
  state: String,
  groupClasses: Boolean,
  category: String,
  reviews: [{type: Schema.Types.ObjectId, ref: "GymReview"}],
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const Gym = mongoose.model('Gym', gymSchema)

export {
  Gym
}