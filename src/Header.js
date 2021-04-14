import React from "react"
import styled from "styled-components"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RoomIcon from '@material-ui/icons/Room';


function Header(){
    return(
        <Container>
            <HeaderLogo>
                <img src={"https://rdwgroup.com/wp-content/uploads/2013/08/Amazon-800x450-1.jpg"}/>
            </HeaderLogo>

            <HeaderOptionAddress>
                <RoomIcon />
                <HeaderOption>
                    <OptionLineOne>Hello</OptionLineOne>
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
                <HeaderOption>
                    <OptionLineOne>
                        Hello, Riku
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
                    <ShoppingCartIcon />
                    <CartCount> 4 </CartCount>
                </HeaderOptionCart>


            </HeaderNavItems>

        </Container>
    )
}

const Container = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: white;
`

const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin-left: 11px;
    }
`

const HeaderOptionAddress = styled.div`
    padding-left: 9px;
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
    background-color: #febd69;
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
`

const HeaderOptionCart = styled.div`
    display: flex;
    align-items: center;
    padding-right: 9px;
`

const CartCount = styled.div`
    padding-left: 4px;
`

export default Header