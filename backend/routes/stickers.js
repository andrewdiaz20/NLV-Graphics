const router = require('express').Router()

const {
    stickers,
} = require('../controller/stickers')


router.get('/all', stickers)

module.exports = router