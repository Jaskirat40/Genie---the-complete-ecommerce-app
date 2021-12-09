const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JcnWwSABIP41UNmyFIzAdWCckeWkkU1xLaruihnOESZQ7BM8tgXpNKRTUAkJUe3RBa3ynOzpAMlI2wZYvpaWKfU004kY10enB"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  var a = (request.query.total);
  var total = parseFloat(a).toFixed(0);

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
    payment_method_types: ['card'],
    description: 'Software development services',
    shipping:{name: 'Jenny Rosen',
    address: {
      line1: '510 Townsend St',
      postal_code: '98140',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',}
  }
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
// Example endpoint
// http://localhost:5001/clone-31175/us-central1/api