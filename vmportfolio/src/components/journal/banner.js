import React from "react";
import styled from "styled-components";

const S = {};

S.Container = styled.div`
    top: 0px;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    // border: solid red 5px;
    // background-color: red;


`

S.Banner = styled.div`
  // border: solid black 3px;
  height: 100%;
  width: 100%;
  writing-mode: vertical-rl;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: rotate(180deg)
  box-sizing: border-box;

  @media (min-width: 1024px) {
    width: 90vw;
  }
  
`

S.H1 = styled.h1`
  // border: solid green 1px;
  margin: 0px;
  width: 4.5%;
  box-sizing: border-box;
  font-size: 5.7vw;
  display: flex;
  align-items: center;
`

S.SH1 = styled(S.H1)`
  margin-top: 3vw;
`

const Banner = (props) => (
    <S.Container>
        <S.Banner>
    <S.H1>JOURNAL</S.H1>
    <S.H1>JOURNAL</S.H1>
    <S.SH1>  JOURNAL</S.SH1>
    <S.SH1>  JOURNAL</S.SH1>
    <S.H1>JOURNAL</S.H1>
    <S.H1>JOURNAL</S.H1>
    <S.SH1>  JOURNAL</S.SH1>
    <S.SH1>  JOURNAL</S.SH1>
    <S.H1>JOURNAL</S.H1>
    <S.H1>JOURNAL</S.H1>
    <S.SH1>  JOURNAL</S.SH1>
    <S.SH1>  JOURNAL</S.SH1>
    <S.H1>JOURNAL</S.H1>
    <S.H1>JOURNAL</S.H1>
    <S.SH1>  JOURNAL</S.SH1>
    <S.SH1>  JOURNAL</S.SH1>
    <S.H1>JOURNAL</S.H1>
    <S.H1>JOURNAL</S.H1>
    <S.SH1>  JOURNAL</S.SH1>
    <S.SH1>  JOURNAL</S.SH1>
    <S.H1>JOURNAL</S.H1>
    <S.H1>JOURNAL</S.H1>
    
  </S.Banner>
    </S.Container>
)


export default Banner;