import React from 'react'
import styled from 'styled-components';
import Product from './Product';


function Home() {
    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
                <Product/>
            </Content>
        </Container>
    )
}

export default Home

//https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMU_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV1._CB412009348_.jpg


const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`

const Banner = styled.div`
    background-image: url('https://i.imgur.com/SYHeuYM.jpg');
    min-height: 600px;
    background-position:center;
    background-size: cover;
    z-index: -1;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));

`

const Content = styled.div`
    background: white; 
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
    z-index: 100;
    display: flex;
`
