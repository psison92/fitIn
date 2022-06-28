import { Gym } from "../models/gym.js"

function index(req, res) {
  Gym.find({})
  .then(gyms => {
    res.render('gyms/index', {
      title: "Gyms",
      gyms
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newGym(req, res) {
  res.render('gyms/new', {
    title: "Add Gym",
  })
}

function create(req, res) {
  req.body.author = req.user.profile._id
  req.body.groupClasses = !!req.body.groupClasses
  Gym.create(req.body)
  .then(gym => {
    res.redirect('/gyms')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/gyms')
  })
}

function show(req, res) {
  Gym.findById(req.params.id)
  .then(gym => {
    res.render('gyms/show', {
      title: `${gym.name}`,
      gym
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/gyms')
  })
}

function edit(req, res) {
  Gym.findById(req.params.id)
  .then(gym => {
    res.render('gyms/edit', {
      title: 'Edit Info',
      gym,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/gyms')
  })
}

function update(req, res) {
  Gym.findById(req.params.id)
  .then(gym => {
    if (gym.author.equals(req.user.profile._id)) {
      req.body.groupClasses = !!req.body.groupClasses
      gym.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/gyms/${gym._id}`)
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

export {
  index,
  newGym as new,
  create,
  show,
  edit,
  update,
  newReview,
  createReview,
  editReview,
  updateReview
}