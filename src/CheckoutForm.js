import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

const CheckoutForm = ({ onChildData }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/thank-you",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs"
  }
  const sendDataToParent = (data) => {
    onChildData(amount);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
            
      <select className="form-control form-control-lg mb-2" name="amount" onChange={(e) => {
          setAmount(e.target.value);
          sendDataToParent();
        }
      }>
        <option selected={false} >SELECT YOUR PACKAGE</option>
        <option value="4000">RELAXATION SESSION $40</option>
        <option value="12000">SINGLE SESSION $120</option>
        <option value="30000">THREE SESSION PACKAGE $300</option>
        <option value="50000">FIVE SESSION PACKAGE $500</option>
      </select>
      {/* <button type="button" onClick={sendDataToParent}>Is </button> */}

      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.target.value)}
      />
      <PaymentElement data={amount} id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements || amount < 40} id="submit" onClick={sendDataToParent} className=" btn btn-primary sub-button btn-block">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}


export default CheckoutForm;