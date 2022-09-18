const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    subject: {
        type: String,
    }, 
    message: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
