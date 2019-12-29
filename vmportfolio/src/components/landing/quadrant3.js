import React from "react";
import styled from "styled-components";

const S = {};

S.Container = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0px 100px;
    // border: solid black 1px;
    margin-top: 10vh;
    
    @media (max-width: 768px) {
        padding: 0px 40px;
        margin-top: 10vh;
    }
    @media (max-width: 480px) {
        padding: 0px 20px;
        margin-top: 10vh;
    }

    h2 {
        font-size: 72px;
        align-self: flex-start;
        // border: solid black 1px;
        margin: 0px 0px 8vh 0px;

        
        @media (max-width: 1024px) {
            font-size: 48px;
            margin-bottom: 5vh;
        }
        @media (max-width: 768px) {
            font-size: 48px;
            margin-bottom: 5vh;
        }
        @media (max-width: 480px) {
            font-size: 43px;
            margin-bottom: 5vh;
        }
    }
`

S.Grid = styled.div`
    display: grid;
    height: 550px;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: (2, 1fr);
    grid-gap: 45px;

    
    @media (max-width: 1024px) {
        margin-top: 0%;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: (3, 1fr);
        grid-gap: 36px;
        height: 500px;
    }
    @media (max-width: 768px) {
        margin-top: 0%;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: (3, 1fr);
        grid-gap: 36px;
        height: 450px;
    }
    @media (max-width: 480px) {
        margin-top: 0%;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: (3, 1fr);
        grid-gap: 36px;
        height: 450px;
    }

    div {
        background-color: black;
    }
`

S.Block = styled.div`
    height: 63px;
    width: 63px;
    background-color: black;
    align-self: center;;
    margin-top: 5%;

    @media (max-width: 768px) {
        display: none;
        width: 50px;
        height: 50px;
        margin-top: 15%;
    }
`

    
const Quadrant3 = () => (
    <S.Container>
        <h2>PORTFOLIO</h2>
        <S.Grid>
            <div>
                
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </S.Grid>
        <S.Block />


    </S.Container>
)


export default Quadrant3;