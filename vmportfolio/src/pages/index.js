import React from "react";
import styled from "styled-components";
import {Link} from "gatsby"

import Quadrant1 from "../components/landing/quadrant1";
import Quadrant2 from "../components/landing/quadrant2";
import Quadrant3 from "../components/landing/quadrant3";
import Quadrant4 from "../components/landing/quadrant4";

import Layout from "../components/layout";

const S = {};

S.Container = styled.div`
    top: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: acumin-pro-wide, sans-serif;
    font-weight: 700;
    font-style: normal;
    background-color: white;

    footer {
        align-self: center;
    
        @media (max-width: 480px) {
            font-size: 12px;
        }
    }
    
`



const Landing = ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <S.Container>
                <Quadrant1 />
                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        <Link to={node.fields.slug}>
                        <h3>
                            {node.frontmatter.title}{" "}
                            <span>
                            — {node.frontmatter.date}
                            </span>
                        </h3>
                        <p>{node.excerpt}</p>
                        </Link>
                    </div>
                ))}
                <Quadrant2 />
                <Quadrant3 />
                <Quadrant4 />  
                <footer>
                    Icons made by Freepik from www.flaticon.com
                </footer>  
            </S.Container>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Landing;
