const Product = require("../models/product.model");

module.exports.findAllProducts = (request, response) => {
  Product.find()
      .then((allProducts) => {
          response.json({ product: allProducts })
      })
      .catch((err) => {
          response.json({ message: 'Something went wrong', error: err })
      });
}

module.exports.createProduct = (request, response) => {
  Product.create(request.body)
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};
