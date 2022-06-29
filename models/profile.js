import mongoose from 'mongoose'

const currentGymSchema = new mongoose.Schema({
  gymName: String,
  image: String,
  yelpUrl: String,
  city: String,
  state: String,
} , {
  timestamps: true
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  interests: String,
  city: String,
  state: String,
  currentGym: [currentGymSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
