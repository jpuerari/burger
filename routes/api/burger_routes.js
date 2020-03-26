const router = require('express').Router();

const { getBurgers, createBurger, updateBurger, deleteBurger} = require('../../controllers/burger_controller');

//create full CRUD routes at '/burgers` (it will eventually become 'api/burger')

router.get('/burger', (req, res) => {
  getBurgers()
  .then(burgerdata => {
    res.status(200).json(burgerdata);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

router.post('/burger', (req, res) => {
  createBurger(req.body)
  .then(burgerdata => {
    res.status(200).json(burgerdata);
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.put('/burger/:id', (req, res) => {
  updateBurger(req.body, req.params.id)
  .then(burgerdata => {
    if (burgerdata.code === 404) {
      return res.status(404).json(burgerdata);
    }
    res.status(200).json(burgerdata);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

router.delete('/burger/:id', (req, res) => {
  deleteBurger(req.params.id)
  .then(burgerdata => {
    if (burgerdata.code === 404) {
      return res.status(404).json(burgerdata);
    }
    res.status(200).json(burgerdata);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

module.exports = router;