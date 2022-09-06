const express = require("express");
const { userAuth } = require("./../controller/authController");
const {
    addIncome,
    addExpense,
    addSavings,
    updateIncome,
    updateExpense,
    updateSavings,
    getAllFinanceByYear,
    getAllFinanceByMonth,
} = require("./../controller/incomeExpenseController");
const router = express.Router();
// get all finance/asset by a year or month
router.route("/finance/:year").get(userAuth, getAllFinanceByYear);
router.route("/finance/:year").get(userAuth, getAllFinanceByMonth);

// Enter income,expense,savings
router.route("/income/add").post(userAuth, addIncome);
router.route("/expense/add").post(userAuth, addExpense);
router.route("/savings/add").post(userAuth, addSavings);

// update income,expense,savings
router.route("/income/update/:id").patch(userAuth, updateIncome);
router.route("/expense/update/:id").patch(userAuth, updateExpense);
router.route("/savings/update/:id").patch(userAuth, updateSavings);

module.exports = router;

