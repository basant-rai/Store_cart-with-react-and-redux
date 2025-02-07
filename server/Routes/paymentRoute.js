const express = require("express");
const { processPayment, sendStripeAPI } = require("../Controller/paymentController");
const { esewaPay } = require("../Controller/esewa");


const router = express.Router();

router.post('/processpayment', processPayment);
router.get('/stripeAPIKey', sendStripeAPI);
router.get('/stripeAPIKey', sendStripeAPI);
router.post('/esewa-pay', esewaPay);

module.exports = router;
