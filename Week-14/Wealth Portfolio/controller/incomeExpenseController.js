const { Income, Expense, Savings } = require("./../model/incomeExpenseModel");

const addIncome = async (req, res) => {
    try {
        const { user, name, amount, year, month } = req.body;
        const income = await Income.create({ user, name, amount, year, month });
        res.status(201).json({
            status: "success",
            data: {
                income,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

const addExpense = async (req, res) => {
    try {
        const { user, name, amount, year, month } = req.body;
        const expense = await Expense.create({
            user,
            name,
            amount,
            year,
            month,
        });
        res.status(201).json({
            status: "success",
            data: {
                expense,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};
const addSavings = async (req, res) => {
    try {
        const { user, amount, year, month } = req.body;
        const savings = await Savings.create({ user, amount, year, month });
        res.status(201).json({
            status: "success",
            data: {
                savings,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

const updateIncome = async (req, res) => {
    try {
        const updatedIncome = await Income.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json({
            status: "success",
            data: updatedIncome,
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};
const updateExpense = async (req, res) => {
    try {
        const updatedExpense = await Expense.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json({
            status: "success",
            data: updatedExpense,
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};
const updateSavings = async (req, res) => {
    try {
        const updatedSavings = await Savings.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json({
            status: "success",
            data: updatedSavings,
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

const getAllFinanceByYear = async (req, res) => {
    try {
        let income = await Income.find({
            year: req.params.year,
        });
        let expense = await Expense.find({
            year: req.params.year,
        });
        let savings = await Savings.find({
            year: req.params.year,
        });
        res.status(200).json({
            status: "success",
            data: { income, expense, savings },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

const getAllFinanceByMonth = async (req, res) => {
    try {
        let income = await Income.find({
            year: req.params.year,
            month: req.query.month,
        });
        let expense = await Expense.find({
            year: req.params.year,
            month: req.query.month,
        });
        let savings = await Savings.find({
            year: req.params.year,
            month: req.query.month,
        });
        res.status(200).json({
            status: "success",
            data: { income, expense, savings },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

module.exports = {
    addIncome,
    addExpense,
    addSavings,
    updateIncome,
    updateExpense,
    updateSavings,
    getAllFinanceByYear,
    getAllFinanceByMonth,
};
