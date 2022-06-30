import { Gym } from "../models/gym.js"
import { Review } from '../models/review.js'
import axios from "axios"

function index(req, res) {
  Gym.find({})
  .then(gyms => {
    res.render('gyms/index', {
      title: "Gyms",
      gyms
    })
  })
}

function create(req, res) {
  req.body.recommendedBy = req.user.profile._id
  Gym.create(req.body)
  .then(gym => {
    console.log(gym)
    res.redirect('/gyms')
  })
}

function show(req, res) {
  Gym.findById(req.params.id)
  .populate('recommendedBy')
  .populate({
    path: 'reviews',
    populate: {
      path: 'author'
    }
  })
  .then(gym => {
    res.render('gyms/show', {
      title: `${gym.gymName}`,
      gym,
      userHasReviewed: gym?.reviews.some(review => review.author?.equals(req.user.profile._id))
    })
  })
}

function gymSearch(req, res) {
  axios.get(`https://api.yelp.com/v3/businesses/search?categories=gyms&limit=20&location=${req.body.search}`, {
    headers: {
      'Authorization': `Bearer ${process.env.API_KEY}`
    }
  })
  .then(response => {
    res.render('gyms/search', {
      title: "Search Gyms",
      search: req.body.search,
      results: response.data.businesses
    })
  })
}

export {
  index,
  gymSearch,
  create,
  show,
}