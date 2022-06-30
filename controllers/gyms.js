import axios from "axios"

function index(req, res) {
  res.render('gyms/index', {
    title: "Gyms"
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
  gymSearch
}