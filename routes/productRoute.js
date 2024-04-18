const express = require("express");
const router = express.Router();
const {
    getAllProduct,
    getSingleProduct,
    getNewProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productController");

// All products
router.get("/product", getAllProduct);

// single product
router.get("/product/:id", getSingleProduct);

// new product
router.post("/product", getNewProduct);

// update product
router.put("/product/:id", updateProduct);

// delete product
router.delete("/product/:id", deleteProduct);

module.exports = router;
