const express = require('express')
const { Customer, Owner, Organization, BankAccount, Property, Rating, Room, Reservation, ReservationStatus, PaymentOptions} = require('./Classes.js');
const appInstace = express();
const port = 3001;

appInstace.listen(port,()=>{
  console.log("Server is running and listening on port",port);
})

// appInstace.get('/createUser', ())


// Create Customer


// function nameFunction (req,res){

// }

// appInstace.get('/', nameFunction)
// appInstace.post('/', nameFunction)
// appInstace.put('/', nameFunction)
// appInstace.patch('/', nameFunction)
// appInstace.delete('/', nameFunction)
