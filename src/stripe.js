import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "./Stripe.css";
import { useLocation } from "react-router-dom";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51M65k4Aw7ReRNK0FaL8AMne3coIBZv5O5DQmiKmtAZGoNSihLicd2na1jhu4pMKS2e7WbYgQGuCAZu0a5itg8klH002FYePEyN");

const StripePaymentComponent = (data) => {
  const location = useLocation();
  const [clientSecret, setClientSecret] = useState("");

  // const [childData, setChildData] = useState('');
  const amount = location.state.amount;
  const email = location.state.email;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://stripe.sadiatherapy.com/create.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify(
          { items: { 
              amount: amount
            } }
          ),
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
      <div className="row rml justify-content-center">
            <div className="col-sm-12 col-md-6">
                <div className="modal-content anim mb-4">
                    <div className="modal-header p-4">
                        <h3 className="modal-title" id="modalRequestLabel">
                        Make Payment
                        </h3>
                    </div>
                </div>
                {clientSecret && (
                  <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm amount={amount} email={email}/>
                  </Elements>
                )}
            </div>
        </div>
      
    </div>
  );
}

export default StripePaymentComponent;