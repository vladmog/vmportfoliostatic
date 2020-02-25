import React from "react";
import styled from "styled-components";



import SelectedWork from "./selectedWork";

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

    @media (max-width: 900px) {
        padding: 0px 60px;
    }
    
    @media (max-width: 768px) {
        padding: 0px 40px;
        margin-top: 10vh;
    }
    @media (max-width: 480px) {
        padding: 0px 20px;
        margin-top: 10vh;
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

const selectedWorks = [
    {
        name: "Price My Airbnb",
        body: "PriceMyAirbnb is a software solution to the problem of properly pricing Airbnb listings. Using a database of United-States AirBnb listings and data science calculations, the app lays out the financial landscape of users’ locations. This allows them to see where they stand and make informed choices on their properties.",
        techStack: [
            "React JS",
            "React-Router",
            "Axios",
            "Chart JS",
            "Auth0",
            "styled-components",
            "Node JS",
            "Express",
            "Knex",
            "Postgresql"
        ],
        beGithub: "https://github.com/Lambda-School-Labs/airbnb-unit-price-analysis-be",
        feGithub: "https://github.com/Lambda-School-Labs/airbnb-unit-price-analysis-fe",
        linkUrl: "https://pricemyairbnb.netlify.com/"
    },
    {
        name: "Tagger",
        body: "An email client whose data-science-infused search returns emails to queries without the need for exact word matches. As the team lead, solely responsible for coordinating group efforts and building group-dynamics. Led the team through the research and integration phases of the IMAP protocol without prior experience with the technology",
        techStack: [
            "React JS",
            "React-Router",
            "Axios",
            "IMAP",
            "OAuth",
            "styled-components",
            "Node JS",
            "Express",
            "Knex",
            "Postgresql"
        ],
        beGithub: "https://github.com/Lambda-School-Labs/tagger-be",
        feGithub: "https://github.com/Lambda-School-Labs/tagger-fe",
        linkUrl: "https://tagger-lab.netlify.com/"
    },
    {
        name: "Med Cabinet",
        body: "A web application that aids medical cannabis users by processing hundreds of strains and their cannabinoid makeups to make recommendations particular to specific user ailments. Planning and development took place over the course of one week with a team of five front-end developers, and three data-scientists.",
        techStack: [
            "React JS",
            "React-Router",
            "Axios",
            "Redux",
            "styled-components",
            "Node JS",
            "Express",
            "Knex",
            "Postgresql"
        ],
        beGithub: "https://github.com/vladmog/medcabinet_be/tree/Vladislav-Mogilevskiy",
        feGithub: "https://github.com/vladmog/medcabinet_fe/tree/master/medcabinet",
        linkUrl: "https://mcabinet.netlify.com/"
    },

]

    
const Quadrant3 = () => (
    <S.Container>
        
        {selectedWorks.map((selectedWork) => {
            return (
                <SelectedWork selectedWork = {selectedWork} />
            )
        })}


    </S.Container>
)


export default Quadrant3;