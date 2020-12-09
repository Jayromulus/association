const router = require('express').Router()
const { Parent } = require('../db')

router.get('/', (req, res) => res.status(200).send('test works'))

router.route('/parent')
  .post(async (req, res) => {
    try {
      console.log(req.body.name)
      await Parent.create(
        { name: req.body.name }
      )
      console.log(newParent)
      res.status(200).json({message: 'New Parent Created!'})
    } catch (e) {
      res.status(500).json({error: e, endpoint: '/parent post'})
    }
  })
  .put((req, res) => {

  })
  .delete((req, res) => {

  })

module.exports = router