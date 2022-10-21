const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = "sk_test_51Lue4UJeRIWLAFYj0jk4HmYtDFt0ITwZRl3Ut7qMIhyfoLedXpZ15zBvtxr1dGatCAz1fx8qNKOZy84gBPGYCQjZ00wQnvlsG9"
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;