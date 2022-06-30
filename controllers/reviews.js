import { Review } from "../models/review.js"
import { Profile } from "../models/profile.js"



function index(req, res) {
  Review.find({})
  .then(reviews => {
    res.render('reviews/index', {
      title: "Reviews",
      reviews
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newReview(req, res) {
  res.render('reviews/new', {
    title: "Add Review",
  })
}

function create(req, res) {
  req.body.author = req.user.profile._id
  req.body.recommend = !!req.body.recommend
  Review.create(req.body)
  .then(review => {
    res.redirect('/reviews')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/reviews')
  })
}

function show(req, res) {
  Review.findById(req.params.id)
  .then(review => {
    res.render('reviews/show', {
      title: `${review.name}`,
      review
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/reviews')
  })
}

function edit(req, res) {
  Review.findById(req.params.id)
  .then(review => {
    res.render('reviews/edit', {
      title: 'Edit Info',
      review,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/reviews')
  })
}

function update(req, res) {
  Review.findById(req.params.id)
  .then(review => {
    if (review.author.equals(req.user.profile._id)) {
      req.body.recommend = !!req.body.recommend
      review.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/reviews/${review._id}`)
      })
    } else {
      throw new Error ('Not authorized')
    }
  }) 
  .catch(err => {
    console.log(err)
    res.redirect('/reviews')
  })
}
/*

function deleteReview(req, res) {
  Review.findByIdAndDelete(req.params.id)
  .then(gym => {
    if (gym.author.equals(req.user.profile._id)) {
      gym.delete()
      .then(() => {
        res.redirect('/gyms')
      })
    } else {
      throw new Error ('Not authorized')
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/gyms')
  })
}

function newReview(req, res) {
  Gym.findById(req.params.id)
  .then(gym => {
    res.render('gyms/new-review', {
      title: "Write a Review",
      gym,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/gyms')
  })
}

function createReview(req, res) {
  Gym.findById(req.params.id)
  .then(gym => {
    req.body.author = req.user.profile._id
    gym.reviews.push(req.body)
    console.log(req.body)
    gym.save()
    .then(() => {
      res.redirect(`/gyms/${gym._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/gyms')
  })
}


function editReview(req, res) {
  Gym.findById(req.params.id)
  .then(gym => {
    const review = gym.reviews.id(req.params.reviewId)
    res.render(`gyms/edit-review`, {
      title: 'Edit Review',
      gym,
      review,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/gyms`)
  })
}

// TODO: fix!!!
function updateReview(req, res) {
  Gym.findByIdAndUpdate(req.params.id, req.body, {new: true}) 
  .then(gym => {
    res.redirect(`/gyms/${gym._id}/reviews`)
    
  })
}

*/



export {
  index,
  newReview as new,
  create,
  show,
  edit,
  update,
}