import { Gym } from "../models/gym.js"
import axios from "axios"

function create(req, res) {
  Gym.create(req.body)
  .then(gym => {
    res.redirect('/gyms/index')
  })
}

function index(req, res) {
  Gym.find({})
  .then(gyms => {
    res.render('gyms/index', {
      title: "Gyms",
      gyms
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
      search: req.body.search ? req.body.search : null,
      results: response.data.businesses
    })
  })
}

export {
  index,
  gymSearch,
  create,
}