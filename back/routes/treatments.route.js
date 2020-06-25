const express = require("express");
const {Op} = require("sequelize")
const treatments = express.Router();
const Treatment = require("../models/Treatments");
const {authToken } = require("../middlewares")

treatments.use(authToken)

treatments.get("/" ,async (req, res) => {
    try {
        const treatments = await Treatment.findAll({
            where : {
                UserId : req.user.id,
            }
        });
        res.status(200).json(treatments);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

treatments.get("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const treatment = await Treatment.findAll({ where: { id } });
        res.status(200).json(treatment);
    } catch (err) {
        res.status(400).json(err);
    }
});

treatments.post("/", async (req, res) => {
    const { startDate, endDate } = req.body;
    try {
        const treatment = await Treatment.create({
            startDate,
            endDate,
            UserId: req.user.id
        });
        res.status(201).json(treatment);
    } catch (err) {
        res.status(422).json(err);
    }
});

treatments.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { startDate, endDate } = req.body;
    try {
        const Treatment = await Treatment.update(
            { startDate, endDate },
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
        const Treatment = await Treatment.destroy({ where: { id, UserId: req.user.id } });
        res.status(205).send("L'utilisateur a bien été supprimé");
    } catch (err) {
        res.status(422).json(err);
    }
});

module.exports = treatments;
