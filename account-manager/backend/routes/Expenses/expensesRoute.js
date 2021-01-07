const router = require('express').Router();
let Purchase = require('../../models/Expenses/expensesModel');
let moment = require('moment');

//all purchases
router.route('/').get((req, res) => {
    Purchase.find()
        .then(expenses => res.json(expenses))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

//add purchase
router.post('/add', (req, res) => {

    const newPurchase = new Purchase({
        datePurchase: req.body.datePurchase,
        companyNamePurchase: req.body.companyNamePurchase,
        totalPurchase: req.body.totalPurchase,
        GST: req.body.GST,
    });

    console.log("router new sales: " + newPurchase);
    try {
        newPurchase.save();
        // res.json({ "router new sales: ": newSales })
        res.json({ "success": true })
    }
    catch (err) {
        res.status(400).send(err)
    }
});

module.exports = router;