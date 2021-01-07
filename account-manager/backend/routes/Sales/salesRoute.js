const router = require('express').Router();
let Sales = require('../../models/Sales/salesModel');
let moment = require('moment');

//all sales
router.route('/').get((req, res) => {
    Sales.find()
        .then(sales => res.json(sales))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

//add sales
router.post('/add', (req, res) => {

    const newSales = new Sales({
        dateSales: req.body.dateSales,
        totalSales: req.body.totalSales,
        epaySales: req.body.epaySales,
        eftposSales: req.body.eftposSales,
    });

    console.log("router new sales: " + newSales);
    try {
        newSales.save();
        console.log({ "router new sales: ": newSales })
        res.json({ "success": true })
    }
    catch (err) {
        res.status(400).send(err)
    }
});

router.get('/sorted', (req, res) => {
    Sales.find({}).sort({ dateSales: 'ascending' }).exec(function (err, docs) { res.json(docs) })
});

module.exports = router;