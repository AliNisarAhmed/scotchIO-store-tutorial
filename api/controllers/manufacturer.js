const Model = require('../model');
const { Product, Manufacturer } = Model;

const manufacturerController = {
  all (req, res) {
    Manufacturer.find({}).exec((err, manufac) => res.json(manufac));
  }
};

module.exports = manufacturerController;
