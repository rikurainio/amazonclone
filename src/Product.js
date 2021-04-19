import React from 'react'
import styled from "styled-components"
import {db} from "./firebase"
import StarRateIcon from '@material-ui/icons/StarRate';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

function Product({name, price, rating, image, id}) {
    console.log("rating: ", rating)

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
            <ProductInfo>
                <Title>
                    {name}
                </Title>
                <Price>
                    {price}€
                </Price>
                <Rating>
                {   
                    Array(5)
                    .fill(<StarRateIcon style={{color: "#e0e0e0"}} />)
                    .fill(<StarRateIcon style={{color: "#ffc908"}}/>, 0, rating)
                }
                </Rating>
            </ProductInfo>
            
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

    min-width: 312px;
    max-width: 312px;

    max-height: 400px;
    display: flex;
    flex-direction: column;
    
`
const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.span`
    min-height: 20px;
    max-height: 20px;
    padding-bottom: 1px;
`

const Price = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-top: 3px;
`

const Rating = styled.div`
    padding-top: 8px;
    display: flex;
    margin-left: -6px;
`

const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
    
    
`

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #ffc1c1;
    background-color: #dedede;
    border: 2px solid #3d3d3d;
    border-radius: 3px;
    cursor: pointer;
`

const ActionSection = styled.div`
    margin-top: 12px;
    display: grid;
    place-items: center;
`

export default Product
