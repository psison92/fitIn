import mongoose from "mongoose"

const Schema = mongoose.Schema

const gymSchema = new Schema({
  name: String,
  city: String,
  state: String,
  groupClasses: Boolean,
  category: String,
  reviews: [{type: Schema.Types.ObjectId, ref: "GymReview"}]
})

const Gym = mongoose.model('Gym', gymSchema)

export {
  Gym
}