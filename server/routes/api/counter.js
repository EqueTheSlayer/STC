const express = require('express');
const mongodb = require('mongodb');
const loadCounter = require('./connect');

const router = express.Router();

//Get counter
router.get('/',async (req, res) => {
  const counter = await loadCounter();
  res.send(await counter.find({}).toArray());
})

//Update counter
router.put('/:id', async (req, res) => {
  const counter = await loadCounter();
  await counter.updateOne({
    _id: new mongodb.ObjectID(req.params.id),
  }, {
    $set: {counter: req.body.counter},
  }, {
    upsert: true,
  });

  res.status(200).send();
});

module.exports = router;