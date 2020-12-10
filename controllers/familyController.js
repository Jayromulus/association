const router = require('express').Router()
const { Parent, Sibling, Child } = require('../models')

router.route('/parent')
  .post(async (req, res) => {
    try {
      await Parent.create(
        { name: req.body.name }
      )
      res.status(200).json({ message: 'New Parent Created!' })
    } catch (e) {
      res.status(500).json({ error: e })
    }
  })
  .put(async (req, res) => {
    try {
      await Parent.update(
        { name: req.body.newname },
        { where: { name: req.body.name } }
      )
      res.status(200).json({ message: 'Parent Updated!' })
    } catch (e) {
      res.status(500).json({ error: e })
    }
  })
  .delete(async (req, res) => {
    try {
      await Parent.destroy({ where: { name: req.body.name } })
      res.status(200).json({ message: 'Parent Deleted' })
    } catch (e) {
      res.status(500).json({ error: e })
    }
  })
  .get(async (req, res) => {
    try {
      let parents = await Parent.findAll()
      res.status(200).json({ message: 'Parents Found', parents })
    } catch (e) {
      res.status(500).json({ error: e })
    }
  })

router.route('/sibling')
  .post(async (req, res) => {
    try {
      await Sibling.create(
        { name: req.body.name }
      )
      res.status(200).json({ message: 'New Sibling Created!' })
    } catch (e) {
      res.status(500).json({ error: e })
    }
  })
  .put(async (req, res) => {
    try {
      await Sibling.update(
        { name: req.body.newname },
        { where: { name: req.body.name } }
      )
      res.status(200).json({ message: 'Sibling Updated!' })
    } catch (e) {
      res.status(500).json({ error: e })
    }
  })
  .delete(async (req, res) => {
    try {
      await Sibling.destroy({ where: { name: req.body.name } })
      res.status(200).json({ message: 'Sibling Deleted' })
    } catch (e) {
      res.status(500).json({ error: e })
    }
  })
  .get(async (req, res) => {
    try {
      let siblings = await Sibling.findAll()
      res.status(200).json({ message: 'Siblings Found', siblings })
    } catch (e) {
      res.status(500).json({ error: e })
    }
  })

router.route('/child')
  .post(async (req, res) => {
    try {
      await Child.create(
        { name: req.body.name }
      )
      res.status(200).json({ message: 'New Child Created!' })
    } catch (e) {
      res.status(500).json({ error: e })
    }
  })
  .put(async (req, res) => {
    try {
      await Child.update(
        { name: req.body.newname },
        { where: { name: req.body.name } }
      )
      res.status(200).json({ message: 'Child Updated!' })
    } catch (e) {
      res.status(500).json({ error: e })
    }
  })
  .delete(async (req, res) => {
    try {
      await Child.destroy({ where: { name: req.body.name } })
      res.status(200).json({ message: 'Child Deleted' })
    } catch (e) {
      res.status(500).json({ error: e })
    }
  })
  .get(async (req, res) => {
    try {
      let children = await Child.findAll()
      res.status(200).json({ message: 'Children Found', children })
    } catch (e) {
      res.status(500).json({ error: e })
    }
  })

router.get('/', async (req, res) => {
  try {
    let total = [];
    total.push(... await Parent.findAll())
    total.push(... await Sibling.findAll())
    total.push(... await Child.findAll())
    res.status(200).json({ message: 'All People Found', total })
  } catch (e) {
    res.status(500).json({error: e})
  }
})

module.exports = router