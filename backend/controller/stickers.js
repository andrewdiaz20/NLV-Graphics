const Sticker = require('../models/stickers')

async function stickersAll(req,res){
  try{
    const Stickers = await Sticker.find()
    res.json(Stickers)
  } catch (error) {
    console.log('error fetching all stickers', error)
    res.status(500).json({message: 'error fetching all stickers'})
  }
}


// router.get('/', (req, res) => {
//   db.sticker.find()
//   .then((sticker) => {
//     res.render('sticker/server', { sticker })
//   })
//   .catch(err => {
//     console.log(err)
//     res.render('404')
//   })
// })

// router.post('/', (req, res) => {
//   db.sticker.create(req.body)
//     .then(() => {
//         res.redirect('/sticker')
//     })
//     .catch(err => {
//         console.log('err', err)
//         res.render('404')
//     })
// })

// router.get('/new', (req, res) => {
//   res.render('sticker/new')
// })

// router.get('/:id', (req, res) => {
//   res.send('GET /sticker/:id stub')
// })

// router.put('/:id', (req, res) => {
//   res.send('PUT /sticker/:id stub')
// })

// router.delete('/:id', (req, res) => {
//   res.send('DELETE /sticker/:id stub')
// })

// router.get('/:id/edit', (req, res) => {
//   res.send('GET edit form stub')
// })

// router.post('/:id/rant', (req, res) => {
//   res.send('GET /sticker/:id/rant stub')
// })

// router.delete('/:id/rant/:rantId', (req, res) => {
//     res.send('GET /sticker/:id/sticker/:stickerId stub')
// })

module.exports = {
  stickersAll
}