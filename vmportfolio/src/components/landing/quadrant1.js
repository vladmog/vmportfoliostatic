import React from 'react';
import styled from "styled-components";

const S = {}

S.Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    left: 0px;
    right: 0px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 100px;
    // border: solid red 5px;

    @media (max-width: 900px) {
        padding: 0px 60px;
    }
    
    @media (max-width: 768px) {
        padding: 0px 40px;
    }
    @media (max-width: 480px) {
        padding: 0px 20px;
    }

    h1 {
        margin-top: 25vh;
        font-size: 48px;
        text-align: left;
        font-family: 'Gentium Basic', serif;

        
        @media (max-width: 1024px) {
            font-size: 32px;
        }
        @media (max-width: 768px) {
            font-size: 28px;
        }
        @media (max-width: 480px) {
            font-size: 28px;
        }
    }
`

S.BlockContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    // border: solid green 1px;
    width: 100%;
    height: 30vh;

    
`

S.Block = styled.div`
    height: 63px;
    width: 63px;
    background-color: black;

    
    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
    }
`

const Quadrant1 = () => (
    <S.Container>
        <h1>Los Angeles based Full Stack web developer, visual artist, and node in the universe</h1>
        <S.BlockContainer>
            <S.Block />
        </S.BlockContainer>
    </S.Container>
)

export default Quadrant1;