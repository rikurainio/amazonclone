import React from 'react'
import styled from "styled-components"
import Product from "./Product"
import { db } from "./firebase"
import { useState, useEffect } from "react"

function Home() {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        db.collection("products").onSnapshot((snapshot) => {
            let tempProducts = [];
            console.log(snapshot);

            //iterate through products AKA docs
            tempProducts = snapshot.docs.map((doc) => ({
                id: doc.id,
                product: doc.data()
            }));
            setProducts(tempProducts);
        })
    }

    useEffect(() => {
        getProducts()
    }, [])



    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
                {
                    products.map((data) => (
                        <Product
                            name = {data.product.name}
                            price = {data.product.price}
                            rating = {data.product.rating}
                            image = {data.product.image}
                            id = {data.id}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}

const Container = styled.div`
    max-width 1500px;
    margin: 0 auto;
`

const Banner = styled.div`
    //clip-path: polygon(205% 200%, 100% 0%, 35% 100%, 0% 0%);
    //background-image: url(https://i.imgur.com/SYHeuYM.jpg);
    min-height: 600px;
    background-position: center;
    background-size: cover;
    //mask-image: linear-gradient(to bottom, rgba(255,75,192,1), rgba(0,0,0,0));
    z-index: 1;
    //background: linear-gradient(90deg, rgba(255,193,193,1) 0%, rgba(255,243,216,1) 100%);
`

const Content = styled.div`
    background-color: ghostwhite;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
    z-index: 100;
    display: flex;
`

export default Home
