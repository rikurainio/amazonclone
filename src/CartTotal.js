import React from 'react'
import styled from "styled-components"
import NumberFormat from 'react-number-format';

function CartTotal({ getCount, getTotalPrice }) {

    return (
        <Container>
            <Subtotal>Subtotal ({getCount()} items):
                <NumberFormat value ={getTotalPrice()} displayType={"text"} thousandSeparator={true} suffix={'€'} />
            </Subtotal>
            <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </Container>
    )
}

const Container = styled.div`
    height: 200px;
    flex: 0.3;
    padding: 20px;
    background-color: white;
`
const Subtotal = styled.h2`
    margin-bottom: 16px;
`

const CheckoutButton = styled.button`
    background-color: #f0c14b;
    background-color: ghostwhite;
    width: 100%;
    padding: 4px 8px;
    border: 2px solid black;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    :hover {
        background: #ddb347;
    }
`

export default CartTotal
