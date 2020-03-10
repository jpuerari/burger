const router = require('express').Router();

const { getBurgers, createBurger, updateBurger, eliminateBurger} = require('../../controllers/burger_controller');

//create full CRUD routes at '/burgers` (it will eventually become 'api/burger')

router.get('/burger', (req, res) => {
  getCats()
  .then(burgerData => {
    res.status(200).json(burgerData);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

router.post('/burger', (req, res) => {
  createBurger(req.body)
  .then(burgerData => {
    res.status(200).json(burgerData);
  })
  .catch(err => {
    res.status(500).json(err)
  })

});

router.put('/burger/:id', (req, res) => {
  updateBurger(req.body, req.params.id)
  .then(burgerData => {
    if (burgerData.code === 404) {
      return res.status(404).json(burgerData);
    }
    res.status(200).json(burgerData);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

router.eliminate('/burger/:id', (req, res) => {
  eliminateBurger(req.params.id)
  .then(burgerData => {
    if (burgerData.code === 404) {
      return res.status(404).json(burgerData);
    }
    res.status(200).json(burgerData);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

module.exports = router;