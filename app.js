const express= require('express');
const sequelize = require ('./src/models/sequelize');
const User = require('./src/models/users')
const Product = require('./src/models/products')
const Order = require('./src/models/orders')
const app=express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const router = express.Router();

app.use(bodyParser.json());
dotenv.config();
global.dotenv=dotenv;

// //create tables

(async () => {
	try {
	  await sequelize.sync({ alter: false });
	  console.log('Tables created successfully (if they didn\'t already exist)');
	} catch (error) {
	  console.error('Error creating tables:', error);
	} finally {
	  await sequelize.close();
	}
  })();



// Handle 404 errors
app.get('*', function(req, res){
    res.status(404).send('not found!');
});

// Capture 500 errors
app.use((err,req,res,next) => {
	res.status(500).send('Could not perform the calculation!');
	logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
})
	
// Capture 404 erors
app.use((req,res,next) => {
	res.status(404).send("PAGE NOT FOUND");
	logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
})

module.exports = app;

// Run Server -----------------------------------------------
app.listen(process.env.APP_PORT,()=>{
	console.log("Server Started!")
});