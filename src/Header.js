import React from "react"
import styled from "styled-components"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RoomIcon from '@material-ui/icons/Room';
import { Link } from "react-router-dom"
import StoreIcon from '@material-ui/icons/Store';


function Header({ cartItems, user, signOut }){

    const getCount = () => {
        let count = 0;

        //loop through all cart items and sum quantities
        cartItems.forEach((item) => {
            count += item.product.quantity;
        })
        return count;
    }

    return(
        <Container>
            <HeaderLogo>
                <Link to="/">
                    <StoreIcon />
                </Link>
            </HeaderLogo>

            <HeaderOptionAddress>
                <RoomIcon />
                <HeaderOption>
                    <OptionLineOne>Hello, {user.name}</OptionLineOne>
                    <OptionLineTwo>Select your address</OptionLineTwo>
                </HeaderOption>

            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type="text"/>

                
                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOption onClick={signOut}>
                    <OptionLineOne>
                        Hello, {user.name}
                    </OptionLineOne>
                    <OptionLineTwo>
                        Account & Lists
                    </OptionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne>
                        Returns
                    </OptionLineOne>
                    <OptionLineTwo>
                        & Orders
                    </OptionLineTwo>
                </HeaderOption>

                <HeaderOptionCart>
                    <Link to="cart">
                        <ShoppingCartIcon />
                        <CartCount>{getCount()}</CartCount>
                    </Link>  
                </HeaderOptionCart>
            


            </HeaderNavItems>

        </Container>
    )
}

const Container = styled.div`
    a {
        color: white;
    }

    height: 60px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px solid black;

    color: white;
`

const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin-left: 11px;
    }
`

const HeaderOptionAddress = styled.div`
    padding-left: 10px;
    display: flex;
    align-items: center;
`

const OptionLineOne = styled.div`
`

const OptionLineTwo = styled.div`
    font-weight: 700;
`

const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 4px;
    background-color: white;

    :focus-within {
        box-shadow: 0 0 0 3px #F90;
    }
`

const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;

    :focus {
        border: none;      
    }
`

const HeaderSearchIconContainer = styled.div`
    background-color: #fff3d8;
    background-color: #ffc1c1;
    background-color: ghostwhite;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    alignt-items: center;
    
`

const HeaderNavItems = styled.div`
    display: flex;
`

const HeaderOption = styled.div`
    padding: 10px 9px 10px 9px;
    cursor: pointer;
`

const HeaderOptionCart = styled.div`
    display: flex;
    align-items: center;
    padding-right: 9px;

    a {
        display: flex;
        align-items: center;
        padding-right: 9px;
        color: white;
        text-decoration: none;
    }
`

const CartCount = styled.div`
    padding-left: 4px;
    font-weight: 700;
    color: f08804;
`

export default Header