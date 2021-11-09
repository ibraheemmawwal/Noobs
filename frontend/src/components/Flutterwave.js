import React from 'react';
import {
  // closePaymentModal,
  FlutterWaveButton,
} from 'flutterwave-react-v3';
import { useSelector } from 'react-redux';
// import Axios from "axios";

export default function App() {
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order } = orderDetails;

  const config = {
    public_key: 'FLWPUBK_TEST-5eb661d4aa1341d356cbaef86bb8345e-X',
    tx_ref: Date.now(),
    amount: order.totalPrice,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    // specified redirect URL
    // redirect_url: `https://localhost:3000/order/${order._id}`,
    customer: {
      email: order.shippingAddress.email,
      phonenumber: order.shippingAddress.mobileNumber,
      name: order.shippingAddress.fullName,
    },
    customizations: {
      title: 'Noobs store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (paymentResult) => {
      console.log(paymentResult.customer.email);
      // setTimeout(() => {
      //   window.location.replace(`https://localhost:3000/order/${order._id}`);
      // }, 2500);
      // closePaymentModal();
    },
    onClose: () => {},
  };

  return (
    <div className="App">
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}

export const payment = Response;
