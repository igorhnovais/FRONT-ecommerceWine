import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
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
        <Button type="submit">FINALIZAR PAGAMENTO</Button>
      </form>
    </>
  );
}

const Button = styled.button`
  background-color: #322938;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 3px;
    width: 303px;
    margin-top: 10px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.35);
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    :active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
    }
`