const express= require('express');
const app=express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const router = express.Router();
const api = require('./src/routes/api')

app.use(bodyParser.json());
dotenv.config();
global.dotenv=dotenv;

  app.use("/api",api);

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