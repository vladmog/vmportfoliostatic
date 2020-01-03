import React from "react";
import styled from "styled-components"

const S = {}

S.Container = styled.div`
    height: 90px;
    width: 100%;
    background-color: green;
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
                        <S.Date>{props.date}</S.Date>
                    </S.Meta>
                </S.Left>
                <S.Social>
                    <S.Icon />
                    <S.Icon />
                    <S.Icon />
                </S.Social>
            </S.Author>
            
        </S.Container>
    )
}

export default Header;