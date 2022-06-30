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

const Gym = mongoose.model('Gym', gymSchema)

export {
  Gym
}