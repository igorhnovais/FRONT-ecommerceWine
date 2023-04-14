import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import useToken from '../Hooks/useToken';
import Swal from 'sweetalert2';

export default function PaymentStripeButton() {
  const token = useToken();
  
  function goToPaymentPage(e) {

    e.preventDefault();

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Você tem certeza?',
      text: "Essa loja não existe, foi feito para fins didáticos!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, ver funcionando!',
      cancelButtonText: 'Não, sair!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Ok!',
          'Não compre nada!.',
          'success'
        )
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
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Seu dinheiro está a salvo :)',
          'error'
        )
      }
    })
    
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
    //box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 4px 6px white;
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