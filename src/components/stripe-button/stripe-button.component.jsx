import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_rR0k5v3FJ0qNsqopE8JVxgBt00poarVsn5';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }

  return(
    <StripeCheckout
      label = 'Pay Now'
      name  = 'CRWN Clothing Ltd.'
      billingAdress
      shippingAdress
      image = 'https://sendeyo.com/up/d/f3eb2117da'
      description ={`Your total is $${price}`}
      amount = {priceForStripe}
      panelLabel = 'Pay Now'
      token = {onToken}
      stripeKey = { publishableKey }
    />
  );
};

export default StripeCheckoutButton;