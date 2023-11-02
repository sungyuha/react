const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
    {
        chat: String,
        user: {
            id: {
                ref: "User",
            }
        },
    },
);

module.exports = mongoose.module("User", chatSchema);