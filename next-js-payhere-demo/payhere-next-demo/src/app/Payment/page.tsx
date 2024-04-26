"use client";
import {Payhere, AccountCategory} from "@payhere-js-sdk/client"
import React from "react";
import {Customer, CurrencyType, PayhereCheckout, CheckoutParams} from '@payhere-js-sdk/client'

interface PaymentModalProps {   
    returnURL: string;
    cancelURL: string;
    notifyURL: string;
    orderID: string;
    itemTitle: string;
    currency: CurrencyType;
    amount: number;
    }
    
function PaymentModal (){

// Sandbox 
Payhere.init("12xxxxx",AccountCategory.SANDBOX) //Change your Merchant ID

  
  function onPayhereCheckoutError(errorMsg: any) {
    alert(errorMsg)
  }
    
  function checkout() {
    const customer = new Customer({
      first_name: "Demo",
      last_name: "User",
      phone: "+94771234567",
      email: "user@example.com",
      address: "No. 50, Highlevel Road",
      city: "Panadura",
      country: "Sri Lanka",
    })
  
    const checkoutData = new CheckoutParams({
      returnUrl: 'http://localhost:3000/return',
      cancelUrl: 'http://localhost:3000/cancel',
      notifyUrl: 'http://localhost:8080/notify',
      order_id: '112233',
      itemTitle: 'Demo Item',
      currency: CurrencyType.LKR,
      amount: 100
    })
  
    const checkout = new PayhereCheckout(customer,checkoutData,onPayhereCheckoutError)
    checkout.start()
  }

  return <button onClick={checkout}>Pay with Payhere</button>;
};

export default PaymentModal;
