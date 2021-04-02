import React from 'react'
import styled from 'styled-components';





function Product() {
    return (
        <div>
            <Container>
                Product
            </Container>
        </div>
    )
}

export default Product

const Container = styled.div`
    background-color: white;
    z-index: 100;
    width: 300px;
    height: 300px;
`

