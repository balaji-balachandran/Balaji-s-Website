const express = require('express')

const router = express.Router()

router.get('/', (req, res)=>{
    res.json({msg: 'Welcome to the app'})
  })

router.post('/', (req, res) =>{
    console.log(req.body)
})

module.exports = router 