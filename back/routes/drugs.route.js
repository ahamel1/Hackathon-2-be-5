const express = require("express");
const drugs = express.Router();
const Drug = require("../models/Drugs");

drugs.get("/", async (req, res) => {
    try {
        const drug = await Drug.findAll();
        res.status(200).json(drug);
    } catch (err) {
        res.status(400).json(err);
    }
});

drugs.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const drug = await Drug.findAll({ where: { id } });
        console.log(drug);
        res.status(200).json(drug);
    } catch (err) {
        res.status(400).json(err);
    }
});

drugs.post("/", async (req, res) => {
    const { name, dosage, molecule } = req.body;
    try {
        const drug = await Drug.create({
            name,
            dosage,
            molecule,
        });
        res.status(201).json(drug);
    } catch (err) {
        res.status(422).json(err);
    }
});

drugs.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, dosage, molecule } = req.body;
    try {
        const drug = await Drug.update(
            { name, dosage, molecule },
            { where: { id } }
        );
        res.status(202).send("Medicament Modifié");
    } catch (err) {
        res.status(422).json(err);
    }
});

drugs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const drug = await Drug.destroy({ where: { id } });
        res.status(205).send("Medicament supprimé");
    } catch (err) {
        res.status(422).json(err);
    }
});

module.exports = drugs;
