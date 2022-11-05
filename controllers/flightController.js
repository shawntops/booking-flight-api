const {Flights} = require("../models/Flight");
const {v4: uuid} = require("uuid");

// exports.example = (req, res) => {
//     console.log("example")
//     res.send("Flight example")
// }

//GET ALL FLIGHTS
exports.getFlights =async (req, res) => {
    try {
        const flights = Flights;
        res.status(200).json({
            message: "All Flights Fetched!",
            flights: flights
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//GET A SINGLE FLIGHT
exports.getFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        res.status(200).json({
            message: "Flight found!",
            flight,
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//CREATE A FLIGHT ENTRY
exports.createFlight = async (req, res) => {
    try {
        const {title, price, time, date} = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            time,
            price,
            date,
        }
        Flights.push(newFlight);

        res.status(201).json({
            message: "Flight Created!",
            newFlight,
        });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

//UPDATE FLIGHT RECORDS
exports.updateFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        const {title, price, time, date} = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;
        res.status(200).json({
            message: "Flight Updated!",
            flight,
        });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

//DELETE FLIGHT RECORD
exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        Flights.splice(Flights.indexOf(flight), 1);
        res.status(200).json({
            message: "Flight Deleted!",
            flight,
        });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};
