const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/, "Try again. Please enter a valid email",]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought"
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    ]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

// friendcount virtual used to get friend count number when user is queried
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });

const User = model("User", userSchema);
module.exports = User;