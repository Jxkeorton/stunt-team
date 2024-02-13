const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.NODE_ENV)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB