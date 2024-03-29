const mongoose = require("mongoose");
const User = require("./userModal");

const IncomeSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: 'User',
        },
        name: { type: String, required: true },
        amount: { type: Number, required: true },
        year: { type: Number, required: true },
        month: { type: String, required: true },
    },
    { timestamps: true }
);

const ExpenseSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: 'User',
        },
        name: { type: String, required: true },
        amount: { type: Number, required: true },
        year: { type: Number, required: true },
        month: { type: String, required: true },
    },
    { timestamps: true }
);

const SavingsSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: 'User',
        },
        amount: { type: Number, required: true },
        year: { type: Number, required: true },
        month: { type: String, required: true },
    },
    { timestamps: true }
);
const Income = mongoose.model("Income", IncomeSchema);
const Expense = mongoose.model("Expense", ExpenseSchema);
const Savings = mongoose.model("Savings", SavingsSchema);

module.exports = {
    Income,
    Expense,
    Savings,
};
