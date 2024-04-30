const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose')
const userRoutes = require("./Routes/userRoutes");
const categoryRoutes = require("./Routes/categoryRoutes");
const expenseRoutes = require("./Routes/expenseRoutes");


const cors = require('cors');

const app = express();
dotenv.config();

app.set('view engine', 'ejs');
app.set('views', './views');

// Database Connection 
const DB = process.env.DATABASE_LOCAL;
mongoose.connect(DB).then((con) => {
    console.log(`Database is successfully connected`);
}).catch((err) => console.log(err) )

// Middlewares 
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


// Routes 
app.use('/api/v1/users' , userRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use("/api/v1/expenses",expenseRoutes);


// Serevr is  started at defined port
const port = process.env.PORT || 8000;

app.listen(port , (req , res) => {
    console.log(`Server is running on ${port}`)
})