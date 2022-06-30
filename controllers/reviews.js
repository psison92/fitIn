import { Review } from "../models/review.js"
import { Gym } from "../models/gym.js"

function create(req, res) {
  req.body.author = req.user.profile._id
  Review.create(req.body)
  .then(review => {
    Gym.findById(req.params.id)
    .then(gym => {
      gym.reviews.push(review._id)
      gym.save()
      .then(gym => {
        res.redirect(`/gyms/${gym._id}`)
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/gyms')
  })
}

export {
  create,
}