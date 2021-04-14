import React from 'react'
import styled from "styled-components"


function Product() {
    return (
        <Container>
            <Title>
                Oneplus Nord N100 Smartphone (Midnight Frost)
            </Title>
            <Price>
                149€
            </Price>
            <Rating>
                ⭐⭐⭐⭐⭐
            </Rating>
            <Image src="https://www.gigantti.fi/image/dv_web_D180001002578713/243529/oneplus-nord-n100-aelypuhelin-midnight-frost.jpg?$digital220x220$"/>
            
            <ActionSection>
                <AddToCartButton>
                    Add to cart
                </AddToCartButton>
            </ActionSection>
            
        </Container>
    )
}

const Container = styled.div`
    background-color: white;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 9px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
`

const Title = styled.span`
`

const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`

const Rating = styled.div`
`

const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`

const AddToCartButton = styled.button`
    widht: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
`

const ActionSection = styled.div`
    margin-top: 12px;
    display: grid;
    place-items: center;
`

export default Product
