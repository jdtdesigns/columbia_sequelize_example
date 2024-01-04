const router = require('express').Router();
const Performer = require('../models/Performer');

router.post('/create', (req, res) => {
  Performer.create({
    name: req.body.name,
    skill: req.body.skill
  }).then((newObj) => {
    res.send(newObj);
  }).catch((err) => {
    console.log(err);
  });
});

// router.get('/test2', (req, res) => {
//   res.send('this is a test');
// });

// router.get('/test3', (req, res) => {
//   res.send('this is a test');
// });

// router.get('/test4', (req, res) => {
//   res.send('this is a test');
// });


module.exports = router;



// function Person() {
//   return {

//   }
// }

// const jd = Person();