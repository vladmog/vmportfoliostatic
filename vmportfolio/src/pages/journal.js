import React from 'react';
import styled from "styled-components";

import Banner from "../components/journal/banner"
import Entry from "../components/landing/entry"
import Layout from "../components/layout"
import { graphql } from "gatsby"


const S = {};

S.Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border: solid green 5px;
    font-family: 'Arial';
    font-weight: 700;
    left 0px;
    right 0px;
    max-width: 1500px;
    margin: auto;
    margin-bottom: 100px;
    padding: 0px 100px;
    @media (max-width: 768px) {
        padding: 0px 40px;
        margin-top: 10vh;
    }
    @media (max-width: 480px) {
        padding: 0px 20px;
        margin-top: 10vh;
    }


`
const entries = [
    {
        title: "An exploration of shape and form",
        category: "Technology",
        date: "11/23/2019"
    },
    {
        title: "An exploration of shape and form",
        category: "Photography",
        date: "11/23/2019"
    },
    {
        title: "An exploration of shape and form",
        category: "Philosophy",
        date: "11/23/2019"
    },
    {
        title: "An exploration of shape and form",
        category: "Technology",
        date: "11/23/2019"
    },
    {
        title: "An exploration of shape and form",
        category: "Art",
        date: "11/23/2019"
    },
]

const Journal = ({
    data: {
      allMdx: { edges },
    },
}) => {
    const posts = edges.map((edge) => {
        return (
          {
            path: edge.node.frontmatter.path,
            date: edge.node.frontmatter.date,
            title: edge.node.frontmatter.title,
            category: edge.node.frontmatter.category,
          }
        )
    })
    return (
        <Layout>
            <S.Container>
                <Banner />
                
                {posts.map((entry) => {
                    return (
                        <Entry entry = {entry}/>
                    )
                })}
                
                
            </S.Container>
        </Layout>
    )
}


export default Journal;

export const pageQuery = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date}) {
      edges {
        node {
          id
          frontmatter {
            path
            date
            title
            category
          }
        }
      }
    }
  }
`