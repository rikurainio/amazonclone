import React from 'react'
import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

//This component includes every filtering component
function SearchFilter() {
    const [valuePrice, setValuePrice] = React.useState([0, 1000]);
    const [valueRating, setValueRating] = React.useState([0,5]);
    const [valueBrand, setValueBrand] = React.useState("");


    const handleChange = (event, newValue) => {
        setValuePrice(newValue);
    };
    function valuetext(value) {
        return `${value}°C`;
    }

    return (
        <Container>
            <h2>Filter phones</h2>
            <FilterPriceContainer>
                <h5>price</h5>
                <SliderContainer>
                    <Slider
                        value={valuePrice}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="discrete-slider-small-steps"
                        //aria-labelledby="range-slider"
                        getAriaValueText={valuetext}
                    />  
                </SliderContainer>
            </FilterPriceContainer>

            <FilterRatingContainer>
                <h5>rating</h5>
                <SliderContainer>
                    <Slider
                    />  
                </SliderContainer>
            </FilterRatingContainer>

            <FilterBrandContainer>
                <h5>brand</h5>
                <SliderContainer>
                     
                </SliderContainer>
            </FilterBrandContainer>
              
        </Container>
    )
}

const Container = styled.div`
    background-color: lightgray;

    h5 {
        width: 20%
    }
`

const SliderContainer = styled.div`
    width: 50%
`

const FilterRatingContainer = styled.div`
    display: flex;
    justify-content: flex-start;

    h5 {
        margin-left: 20px;
        margin-right: 20px;
    }
`

const FilterBrandContainer = styled.div`
    display: flex;
    justify-content: flex-start;

    h5 {
        margin-left: 20px;
        margin-right: 20px;
    }
`

const FilterPriceContainer = styled.div`
    display: flex;
    justify-content: flex-start;

    h5 {
        margin-left: 20px;
        margin-right: 20px;
    }
`

export default SearchFilter
