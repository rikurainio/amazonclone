import React from 'react'
import styled from "styled-components"
import SearchFilter from "./SearchFilter"


function Navbar() {
    return (
        <Container>

            <SearchFilter>

            </SearchFilter>

        </Container>
    )
}

const Container = styled.div`
    float: left;
    background-color: #EAEDED;

    margin-top: 63px;
    height: 100%;
    width: 202px;

    position: fixed;
    z-index: 1;

    top: 0;
    left: 0;

    overflow-x: hidden;
`

export default Navbar
