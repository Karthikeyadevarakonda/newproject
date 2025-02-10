const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const cors = require('cors');



const employeeRoutes = require('./routes/employeeRouters')

const app = express()

const PORT = process.env.PORT || 5000

dotEnv.config()

app.use(bodyParser.json())
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{ 
    console.log("DB CONNECTED....!")
})
.catch((Error)=>{
    console.log("ERROR",Error)
})


app.use('/employees',employeeRoutes)


app.listen(PORT,()=>{
    console.log("SERVER CONNECTED.....!")
})
