var express = require('express');
var router = express.Router();
var DashboardController = require("../controller/dashboard/dashboard")

/* GET users listing. */
router.get('/dashboard',DashboardController.Profile);
router.get('/create-fee-item',DashboardController.Create_Fee_Item)
router.get('/create-fee-group',DashboardController.Create_Fee_Group);
router.post('/items',DashboardController.Item_fee);

module.exports = router;
