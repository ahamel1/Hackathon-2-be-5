const express = require("express");
const treatments = express.Router();
const Treatment = require("../models/Treatments");

treatments.get("/", async (req, res) => {
    try {
        const treatments = await Treatment.findAll();
        res.status(200).json(treatments);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

treatments.get("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const Treatment = await Treatment.findAll({ where: { id } });
        console.log(Treatment);
        res.status(200).json(Treatment);
    } catch (err) {
        res.status(400).json(err);
    }
});

treatments.post("/", async (req, res) => {
    const { name, duration } = req.body;
    try {
        const Treatment = await Treatment.create({
            name,
            duration,
        });
        res.status(201).json(Treatment);
    } catch (err) {
        res.status(422).json(err);
    }
});

treatments.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, duration } = req.body;
    try {
        const Treatment = await Treatment.update(
            { name, duration },
            { where: { id } }
        );
        res.status(202).send("Utilisateur modifié");
    } catch (err) {
        res.status(422).json(err);
    }
});

treatments.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const Treatment = await Treatment.destroy({ where: { id } });
        res.status(205).send("L'utilisateur a bien été supprimé");
    } catch (err) {
        res.status(422).json(err);
    }
});

module.exports = treatments;
