const express = require('express');
const router = express.Router();


const internController = require("../controllers/interController")
const collegeController = require("../controllers/collegeController")





router.post("/college", collegeController.createCollege)

router.post("/intern", internController.createIntern)





router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        msg: "The api you request is not available"
    })
})



module.exports = router;