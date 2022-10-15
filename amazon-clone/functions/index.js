const express = require('express');
const functions = require("firebase-functions");
const cors = require('cors');

const stripe = require('stripe')('sk_test_51Lr2ixEncbzmVlyqIhvbmlUhpTCCknrUgEkE3wzKO4TvSVMkSOTgEtACdjMtMFc01AKgzs9vsgRjspirZJs1K20q00BTDzdsFj');
//API

//App config
const app=express();
//Middlewares
app.use(cors({origin:true}));
app.use(express.json());
//API routes
app.get('/',(request,response)=>response.status(200).send('Ok'))

app.post('/payments/create',async(request,response)=>{
    const total= request.query.total;
console.log('payment request Received',total);

const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency:'usd',
});
response.status(201).send({
    clientSecret:paymentIntent.client_secret,
});
})
//Listen command
exports.api= functions.https.onRequest(app)


