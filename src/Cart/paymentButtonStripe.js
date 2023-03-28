import React from 'react';
import axios from 'axios';
import useToken from '../Hooks/useToken';

export default function PaymentStripeButton() {
  const token = useToken();
  
  function goToPaymentPage(e) {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/create-checkout-session`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        window.location.href = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <form onSubmit={goToPaymentPage}>
        <button type="submit">FINALIZAR PAGAMENTO</button>
      </form>
    </>
  );
}