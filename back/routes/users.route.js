const express = require("express");
const users = express.Router();
const User = require("../models/User");

users.get("/", async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json(err);
    }
});

users.get("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const user = await User.findAll({ where: { id } });
        console.log(user);
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
});

users.post("/", async (req, res) => {
    const { lastName, firstName, email, password, phone_number } = req.body;
    try {
        const user = await User.create({
            lastName,
            firstName,
            email,
            password,
            phone_number,
        });
        res.status(201).json(user);
    } catch (err) {
        res.status(422).json(err);
    }
});

users.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { lastName, firstName, email, password, phone_number } = req.body;
    try {
        const user = await User.update(
            { lastName, firstName, email, password, phone_number },
            { where: { id } }
        );
        res.status(202).send("Utilisateur modifié");
    } catch (err) {
        res.status(422).json(err);
    }
});

users.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.destroy({ where: { id } });
        res.status(205).send("L'utilisateur a bien été supprimé");
    } catch (err) {
        res.status(422).json(err);
    }
});

module.exports = users;
