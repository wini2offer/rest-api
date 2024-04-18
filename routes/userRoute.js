const express = require("express");
const router = express.Router();
const {
  getAllUser,
  getSingleUser,
  getNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// All users
router.get("/user", getAllUser);

// single user
router.get("/user/:id", getSingleUser);

// new user
router.post("/user", getNewUser);

// update user
router.put("/user/:id", updateUser);

// delete user
router.delete("/user/:id", deleteUser);

module.exports = router;
