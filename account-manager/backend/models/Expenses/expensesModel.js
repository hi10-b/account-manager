const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expensesSchema = new Schema({
    datePurchase: {
        type: String,
    },
    companyNamePurchase: {
        type: String,
        // required
    },
    totalPurchase: {
        type: Number,
        // required
    },
    GST: {
        type: Number,
    }
})

const Purchase = mongoose.model('Expenses', expensesSchema);

module.exports = Purchase;