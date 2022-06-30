import mongoose from "mongoose"

const Schema = mongoose.Schema

const gymSchema = new Schema({
  poster: {type: Schema.Types.ObjectId, ref: "Profile"},
  gymName: String,
  city: String,
  state: String,
  image: String,
  yelpUrl: String,
  rating: Number,
}, {
  timestamps: true
})

const Gym = mongoose.model('Gym', gymSchema)

export {
  Gym
}