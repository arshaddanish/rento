const express = require("express");
const app = express();
const { adminAuth } = require("../middleware/adminAuth");
const Message = require("../models/messages");

app.post("/api/message",async (req, res) => {
        const message = new Message(req.body);
    try {
        await message.save();
        res.status(201).send(message);
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
});

app.get("/api/message", adminAuth , async (req, res) => {
    try {
        const messages = await Message.find({}).sort({createdAt: -1});
        res.send(messages);
    }catch(err){
        res.status(500).send(err);
    }
});

app.get("/api/message/:id", adminAuth , async (req, res) => {
    try {
        const message = await Message.findById(req.params.id);
        res.send(message);
    }catch(err){
        res.status(500).send(err);
    }
});

app.delete("/api/message/:id", adminAuth , async (req, res) => {
    try {
        const message = await Message.deleteOne({ _id: req.params.id});
        if (!message) {
            res.status(404).send();
        }
        res.send(message);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = app;
