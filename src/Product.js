import React from 'react'
import styled from "styled-components"
import {db} from "./firebase"
import StarRateIcon from '@material-ui/icons/StarRate';

function Product({name, price, rating, image, id}) {

    const addToCart = () => {
        const cartItem = db.collection("cartItems").doc(id);
        cartItem.get()
        .then((doc) => {
            console.log(doc);
            if(doc.exists){
                console.log("existed")
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            }
            else{
                console.log("didn't exist yet, added one.");
                db.collection("cartItems").doc(id).set({
                    name: name,
                    image: image,
                    price: price,
                    quantity: 1
                })
            }
        })
    }


    return (
        <Container>
            <Title>
                {name}
            </Title>
            <Price>
                {price}€
            </Price>
            <Rating>
                {
                    Array(rating)
                        .fill()
                        .map(rating => <StarRateIcon />)
                }
            </Rating>
            <Image src={image}/>
            
            <ActionSection>
                <AddToCartButton onClick={addToCart}>
                    Add to cart
                </AddToCartButton>
            </ActionSection>
            
        </Container>
    )
}

const Container = styled.div`
    border-radius: 3px;
    background-color: WHITE;
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
    display: flex;
`

const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
    
    
`

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #ffc1c1;
    background-color: ghostwhite;
    border: 2px solid black;
    border-radius: 3px;
    cursor: pointer;
`

const ActionSection = styled.div`
    margin-top: 12px;
    display: grid;
    place-items: center;
`

export default Product
