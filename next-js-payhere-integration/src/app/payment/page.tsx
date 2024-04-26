// SubscriptionPage.tsx
"use client";
import React, { useState } from "react";
import Layout from "../portal/page";
import { Button } from "@mui/material"; // Import your Button component
import Payhere from "payhere-embed-sdk/dist/react"; // Import Payhere component

const SubscriptionPage: React.FC = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [showPayhere, setShowPayhere] = useState<boolean>(false);

  const handleButtonClick = () => {
    setShowPayhere(true);
  };

  return (
    <div id="payhere-modal">
      <div>
        <Button
          sx={{
            backgroundColor: "#f50057",
            color: "white",
            "&:hover": {
              backgroundColor: "#ff4081",
            },
          }}
          onClick={handleButtonClick}
        >
          Continue to payment
        </Button>
        <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          margin: "20px",
        }}
        >
          <Payhere
            amountInCents={1000}
            // hideAmount={"yes"}
            customerName="Johnathan Appleseed"
            customerEmail="john.appleseed@example.org"
            disableCustomer="yes"
            customFields={{
              gift_aid: true,
              address: "23 Village Road\nBelfast\nBT1 1AA, UK",
            }}
            selector="#payhere-modal"
            embedURL="https://app.payhere.co/altlabs/coffee"
            open={showPayhere}
            onSuccess={(data: any) => {
              console.log("Payhere success", data);
              setSuccess(true);
            }}
            onFailure={(err: any) => {
              console.log("Payhere failed", err);
              setSuccess(true);
            }}
            onClose={() => {
              setShowPayhere(false);
              if (success) {
                console.log("Payment success");
              } else {
                console.log("Payment failed");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
