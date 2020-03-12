//import express.router()
const router = require('express').Router();

//import functionality to get all burgers
const { getBurgers } = require('../../controllers/burger_controller.js');

//set up root '/' GET route to serve homepage with burger data

router.get('/', (req, res) => {
  //get all burger data
  getBurgers().then(burgerdata => {
    res.render('index', { burgers: burgerdata });
  })

    .catch(err => {
      res.status(500).end();
    });

});

module.exports = router;