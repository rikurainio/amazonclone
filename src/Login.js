import React from 'react'
import styled from "styled-components"
import {auth, provider} from "./firebase"

function Login({ setUser }) {

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                let user = result.user;
                console.log(user);

                let newUser = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }

                //set User state and save user to browser localStorage
                setUser(newUser);
                localStorage.setItem('user', JSON.stringify(newUser))
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    return (
        <Container>
            <Content>
                <Logo src="https://cdn.pixabay.com/photo/2016/12/21/16/34/shopping-cart-1923313_960_720.png"/>
                <h1> Sign in to
                    online store</h1>
                <LoginButton onClick={signIn}>
                    Sign in with google
                </LoginButton>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    heigh: 100vh;
    background-color: #f8f8f8;
    display: grid;
    place-items: center;
`
const Content = styled.div`
    margin-top: 100px;
    padding: 100px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 5px grey;
    text-align: center;
`
const Logo = styled.img`
    height: 100px;
    margin-bottom: 45px;
`
const LoginButton = styled.button`
    margin-top: 50px;
    background-color: #dedede;
    height: 40px;
    border: 2px solid black;
    padding: 4px 8px;
    cursor: pointer;
`
export default Login
