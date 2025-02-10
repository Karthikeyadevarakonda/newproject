const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    image: {
        type: String, 
        required: true
    },
    pname: {                      
        type: String,
        required: true
    },
    originalPrice: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    reviewCount: {
        type: Number,
        default: 0
    }
})


module.exports = mongoose.model('Employee',employeeSchema)