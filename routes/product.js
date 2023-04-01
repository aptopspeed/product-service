const express = require('express');
const router = express.Router();

const passportJWT = require('../middlewares/passport-jwt');
const checkAdmin = require("../middlewares/check-admin");

/* GET users listing. */
// localhost:5000/api/v1/product/
router.post('/', [passportJWT.checkAuth, checkAdmin.checkAdminRole], async function(req, res, next) {
  const { product_name, product_price} = req.body;

  return res.status(201).json({
    message: 'Add Product Success'
  });
});

module.exports = router;
