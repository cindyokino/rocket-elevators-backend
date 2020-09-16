// const Joi = require('joi');
const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


/* ------------------------------------------------------------------------------
======================== GLOBAL VARIABLES AND CONSTANTS ======================== 
--------------------------------------------------------------------------------*/
const standardFee= 10;
const premiumFee = 13;
const exceliumFee = 16;

const standardPrice = 7565;
const premiumPrice = 12345;
const exceliumPrice = 15400;

/* ------------------------------------------------------------------------------
================================== CALCULATIONS ================================== 
--------------------------------------------------------------------------------*/

/***** CALCULATE NUMBER OF ELEVATORS - RESIDENTIAL BUILDING *****/
app.get('/elevatorsResidential', (req, res) => {
    let numColumns;
    let apartments = parseInt(req.query.apartments);
    let floors = parseInt(req.query.floors);
    let basements = parseInt(req.query.basements);
    
    let totalFloors = floors + basements;
    let averageDoorsPerFloor =  Math.ceil(apartments / floors);

    let elevators = Math.ceil(averageDoorsPerFloor / 6);
    if (totalFloors > 20) {
		numColumns = Math.ceil(totalFloors / 20);
		elevators = elevators * numColumns;
	}

    console.log("number of elevators: " + elevators);
    console.log("number of columns: " + numColumns);
    res.send(elevators + "");
});


/***** CALCULATE NUMBER OF ELEVATORS - CORPORATE BUILDING *****/
app.get('/elevatorsCorporate', (req, res) => {
    let floors = parseInt(req.query.floors);
    let basements = parseInt(req.query.basements);
    let occupants = parseInt(req.query.occupants);
    
    let totalFloors = floors + basements;
	let totalOccupants = occupants * totalFloors;
	let elevators = Math.ceil(totalOccupants / 1000);
	let numColumns = Math.ceil(totalFloors / 20);
	let elevatorsPerColumn = Math.ceil(elevators / numColumns);
    let elevatorsTotal = Math.ceil(elevatorsPerColumn * numColumns);
    
    console.log("number of elevators: " + elevatorsTotal);
    console.log("number of columns: " + numColumns);
    res.send(elevatorsTotal + "");
});


/***** CALCULATE NUMBER OF ELEVATORS - HYBRID BUILDING *****/
app.get('/elevatorsHybrid', (req, res) => {
    let floors = parseInt(req.query.floors);
    let basements = parseInt(req.query.basements);
    let occupants = parseInt(req.query.occupants);
    
    let totalFloors = floors + basements;
	let totalOccupants = occupants * totalFloors;
	let elevators = Math.ceil(totalOccupants / 1000);
	let numColumns = Math.ceil(totalFloors / 20);
	let elevatorsPerColumn = Math.ceil(elevators / numColumns);
    let elevatorsTotal = Math.ceil(elevatorsPerColumn * numColumns);
    
    console.log("number of elevators: " + elevatorsTotal);
    console.log("number of columns: " + numColumns);
    res.send(elevatorsTotal + "");
});


/***** CALCULATE PRICES STANDARD *****/
app.get('/standard', (req, res) => {
    let numElevators = parseInt(req.query.numElevators);
    let priceElevators = numElevators * standardPrice;
	let priceInstallation = priceElevators * (standardFee / 100);
	let totalPrice = priceElevators + priceInstallation;

    console.log("price of elevators: " + priceElevators);
    console.log("priceInstallation of columns: " + priceInstallation);
    console.log("totalPrice of elevators: " + totalPrice);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        standardPrice: standardPrice,
        priceInstallation: priceInstallation ,
        totalPrice: totalPrice,
        }));  
});

/***** CALCULATE PRICES PREMIUM *****/
app.get('/premium', (req, res) => {
    let numElevators = parseInt(req.query.numElevators);
    let priceElevators = numElevators * premiumPrice;
	let priceInstallation = priceElevators * (premiumFee / 100);
	let totalPrice = priceElevators + priceInstallation;

    console.log("price of elevators: " + priceElevators);
    console.log("priceInstallation of columns: " + priceInstallation);
    console.log("totalPrice of elevators: " + totalPrice);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        premiumPrice: premiumPrice,
        priceInstallation: priceInstallation ,
        totalPrice: totalPrice,
        }));  
});

/***** CALCULATE PRICES EXCELIUM *****/
app.get('/excelium', (req, res) => {
    let numElevators = parseInt(req.query.numElevators);
    let priceElevators = numElevators * exceliumPrice;
	let priceInstallation = priceElevators * (exceliumFee / 100);
	let totalPrice = priceElevators + priceInstallation;

    console.log("price of elevators: " + priceElevators);
    console.log("priceInstallation of columns: " + priceInstallation);
    console.log("totalPrice of elevators: " + totalPrice);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        exceliumPrice: exceliumPrice,
        priceInstallation: priceInstallation ,
        totalPrice: totalPrice,
        }));  
});


// PORT - eg.: at the terminal: export/set PORT=5000
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));




