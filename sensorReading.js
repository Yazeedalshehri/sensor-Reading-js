
const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const Datastore = require('nedb'); //create a database
const database = new Datastore('database.db'); //create a file for the database
database.loadDatabase();

var sensorReadingValue = '';

// Defining the serial port
const port = new SerialPort("COM3", {
   baudRate: 9600,
});

//The Serial port parser
const parser = new Readline();
port.pipe(parser);

// Read the data from the serial port
parser.on("data", (line) => console.log(line));

database.insert({ SensorReading: parser}) // add the sensor reading value to the database




