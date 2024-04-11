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

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1});
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.deleteIncome = async (req, res) => {
    const {id} = req.params;

    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({ message: "Income deleted successfully" });
        })
        .catch((error) => {
            res.status(500).json({ error: "Internal Server Error" }); 
        })
    
}