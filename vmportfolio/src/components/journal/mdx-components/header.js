import React from "react";
import styled from "styled-components"

const S = {}

S.Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    // border: solid green 1px;
    box-sizing: border-box;
    font-family: 'Archivo', sans-serif;
    // margin-top: 20px;
    padding: 30px 0px;

`

S.Title = styled.h1`
    font-size: 35px;
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
    margin: 0px;

`

S.Description = styled.h3`
    color: #303030;
    font-size: 20px;
    font-weight: 300;
    margin: 10px 0px;

`

S.Author = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin-top: 15px;

`
S.Left = styled.div`
    display: flex;
    box-sizing: border-box;
    align-items: center;

`
    S.Avatar = styled.div`
        background-color: black;
        border-radius: 25px;
        box-sizing: border-box;
        height: 50px;
        width: 50px;

    `

    S.Meta = styled.div`
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        // border: solid purple 1px;
        margin-left: 5px;
        font-size: 18px;
        font-weight: 300;

    `
        S.Name = styled.div`
        
        `
        S.Date = styled.div`
            color: #303030;
        `

S.Right = styled.div`
    width: 20%;
    box-sizing: border-box;
    // border: solid red 1px;
`
    S.Icon = styled.div`
    
    `


const Header = (props) => {
    console.log(props)
    return (
        <S.Container>
            <S.Title>{props.title}</S.Title>
            <S.Description>{props.description}</S.Description>
            <S.Author>
                <S.Left>
                    <S.Avatar></S.Avatar>
                    <S.Meta>
                        <S.Name>Vladislav Mogilevskiy</S.Name>
                        <S.Date>{props.date} on {props.category}</S.Date>
                    </S.Meta>
                </S.Left>
                <S.Right>
                    <S.Icon />
                    <S.Icon />
                    <S.Icon />
                </S.Right>
            </S.Author>
            
        </S.Container>
    )
}

export default Header;