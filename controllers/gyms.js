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
}

export {
  index,
  newGym as new,
  create,
  show,
}