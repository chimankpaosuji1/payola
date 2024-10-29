// src/components/PaymentButton.js
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const PaymentButton = ({ amount }) => {
  const onToken = (token) => {
    // Handle the payment processing here
    console.log(token);
  };

  return (
    <StripeCheckout
      token={onToken}
      stripeKey="your_stripe_public_key"
      amount={amount * 100} // Stripe expects amount in cents
      name="PAYOLA"
      description="Pay for your collaboration"
      currency="USD"
      email="user@example.com"
    >
      <button className="bg-green-500 text-white px-4 py-2 rounded">
        Pay ${amount}
      </button>
    </StripeCheckout>
  );
};

export default PaymentButton;
