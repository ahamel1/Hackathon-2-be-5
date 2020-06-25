const express = require("express");
const intakes = express.Router();
const inTakes = require("../models/InTakes");

intakes.get("/", async (req, res) => {
    try {
        const intakes = await inTakes.findAll();
        res.status(200).json(intakes);
    } catch (err) {
        res.status(400).json(err);
    }
});

intakes.get("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const user = await inTakes.findAll({ where: { id } });
        console.log(user);
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
});

intakes.post("/", async (req, res) => {
    const { datetime } = req.body;
    try {
        const user = await inTakes.create({
            datetime,
        });
        res.status(201).json(user);
    } catch (err) {
        res.status(422).json(err);
    }
});

intakes.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { datetime, used } = req.body;
    try {
        const user = await inTakes.update(
            { datetime, used },
            { where: { id } }
        );
        res.status(202).send("Utilisateur modifié");
    } catch (err) {
        res.status(422).json(err);
    }
});

intakes.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await inTakes.destroy({ where: { id } });
        res.status(205).send("L'utilisateur a bien été supprimé");
    } catch (err) {
        res.status(422).json(err);
    }
});

module.exports = intakes;