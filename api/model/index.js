const mongoose = require('mongoose');

const Schema = mongoose.Schema,
      model = mongoose.model.bind(mongoose)
      ObjectId = mongoose.Schema.Types.ObjectId;


const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  manufacturer: { type: ObjectId, red: 'Manufacturer'}
});

const manufacturerSchema = Schema({
  id: ObjectId,
  name: String
});

const Product = model('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);

module.exports = { Product, Manufacturer };