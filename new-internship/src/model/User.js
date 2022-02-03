const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email id")
            }
        }
    },referreduser:{
        type: Schema.Types.ObjectId
    },
    ispaymentmade: {
        type: Boolean
    },
    totalearnings: {
        type: Number
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;