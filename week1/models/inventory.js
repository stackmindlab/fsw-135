const mongoose = require("mongoose");
const schema = mongoose.Schema;

const inventorySchema = new schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 20
    },
    value: {
        type: Number,
        required: true,
        min: 0
    }

});

module.exports = mongoose.model('Inventory', inventorySchema);