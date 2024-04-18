const express = require("express");
const router = express.Router();
const {
    getAllService,
    getSingleService,
    getNewService,
    updateService,
    deleteService,
} = require("../controllers/serviceController");

// All serviceService);
router.get("/service",  getAllService);

// single service
router.get("/service/:id", getSingleService);

// new service
router.post("/service", getNewService);

// update service
router.put("/service/:id", updateService);

// delete service
router.delete("/service/:id", deleteService);

module.exports = router;
