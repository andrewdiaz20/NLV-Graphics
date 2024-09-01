const router = require('express').Router()

const {
    stickersAll,
} = require('../controller/stickers')


router.get('/all', stickersAll)

module.exports = router


