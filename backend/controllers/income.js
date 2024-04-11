const IncomeSchema = require("../models/incomeModel");

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const income = new IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        // validations
        if (!title || !amount || !category || !description || !date) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (amount <= 0) {
            return res.status(400).json({ error: "Amount must be a positive number" });
        }

        await income.save();

        res.status(201).json({ message: "Income added successfully" });

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }

    console.log(income);
}