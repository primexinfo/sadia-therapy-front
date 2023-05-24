import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "./Stripe.css";
import { useNavigate } from "react-router-dom";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51M65k4Aw7ReRNK0FaL8AMne3coIBZv5O5DQmiKmtAZGoNSihLicd2na1jhu4pMKS2e7WbYgQGuCAZu0a5itg8klH002FYePEyN");

const StripePaymentComponent = (data) => {
  const [clientSecret, setClientSecret] = useState("");

  const [childData, setChildData] = useState('');
  const navigate = useNavigate();

  const handleChildData = (data) => {
    setChildData(data);
  };

  console.log(childData);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:8888/create.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify({ items: { amount: 4000 } }),
      })
      .then((res) => 
        res.json()
      )
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm  onChildData={handleChildData}/>
        </Elements>
      )}
    </div>
  );
}

export default StripePaymentComponent;