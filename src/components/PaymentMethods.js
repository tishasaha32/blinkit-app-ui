import React, { useState } from "react";
import styles from "./PaymentMethods.module.css";
import { HiOutlineChevronDown } from "react-icons/hi2";
import PaymentThroughWallet from "./PaymentThroughWallet";
import PaymentThroughCard from "./PaymentThroughCard";
import PaymentThroughNetBanking from "./PaymentThroughNetBanking";
import PaymentThroughUPI from "./PaymentThroughUPI";
import PaymentOnDelivery from "./PaymentOnDelivery";

function PaymentMethods() {
  const paymentMethods = [
    { id: 1, name: "Wallets" },
    { id: 2, name: "Add Credit or Debit Cards" },
    { id: 3, name: "Netbanking" },
    { id: 4, name: "Add New UPI ID" },
    { id: 5, name: "Pay on Delivery" },
  ];
  const [selectedMethod, setSelectedMethod] = useState(null);

  const toggleDropDown = (methodId) => {
    setSelectedMethod(selectedMethod === methodId ? null : methodId);
  };

  const renderPaymentMethodContent = (methodId) => {
    switch (methodId) {
      case 1: // Wallet
        return <PaymentThroughWallet />;
      case 2: // Credit or debit card
        return <PaymentThroughCard />;
      case 3: // Netbanking
        return <PaymentThroughNetBanking />;
      case 4: // UPI
        return <PaymentThroughUPI />;
      case 5: // Cash
        return <PaymentOnDelivery />;
      default:
        return <p>Please select a payment method.</p>;
    }
  };

  return (
    <div>
      <h2 className={styles.selectPaymentMethodText}>Select Payment Method</h2>
      <div className={styles.paymentMethodsContainer}>
        {paymentMethods.map((method) => (
          <div key={method.id}>
            <div
              className={
                selectedMethod === method.id
                  ? styles.selectedpaymentMethodContainer
                  : styles.paymentMethodContainer
              }
              onClick={() => toggleDropDown(method.id)}
            >
              <p className={styles.paymentMethod}>{method.name}</p>
              <HiOutlineChevronDown
                className={
                  selectedMethod === method.id
                    ? styles.upArrow
                    : styles.dropDownArrow
                }
              />
            </div>
            {selectedMethod === method.id && (
              <>{renderPaymentMethodContent(method.id)}</>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentMethods;
