import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import styled from "styled-components"
import Header from "../components/journal/mdx-components/header"




const S = {};
S.Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Archivo Black', sans-serif;    
  left 0px;
  right 0px;
  margin-bottom: 30px;
  margin-top: 8vh;

  // @media (max-width: 1024px) {
  //   max-width: 900px;
  // }
  // @media(max-width: 900px) {
  //   max-width: 768px;
  // }
  // @media (max-width: 768px) {
  //   max-width: 480px;
  // }
  // @media (max-width: 480px) {
  //   max-width: 95%;
  // }



`

S.Title = styled.h1`
 margin: 0px;
`

S.Date = styled.h3`
 margin: 0px;
`

S.Body = styled.div`
 width: 100%;
 h1 {
  font-family: 'Archivo Black', sans-serif;
 }

 h2 {
  font-family: 'Archivo Black', sans-serif;
 }

 p {
  font-family: 'Archivo', sans-serif;
  margin: 28px 0px 0px 0px;
  line-height: 30px;
  img {
    width: 100%;
  }
 }

 a {
  font-family: 'Archivo', sans-serif;

 }

 hr {
  border: solid black 1px;
  width: 100%;
 }


`

export default function MdxTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.mdx holds your post data
  const { frontmatter, body } = mdx
  console.log("description", frontmatter.description)
  return (
    <Layout>
      <S.Container className="blog-post">
        {/* <Header title = {frontmatter.title} date = {frontmatter.date} description = {frontmatter.description}/> */}
        <S.Title>{frontmatter.title}</S.Title>
        <S.Date>{frontmatter.date}</S.Date>
        <hr />
        <S.Body>
          <MDXRenderer>{body}</MDXRenderer>
        </S.Body>
      </S.Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date(formatString: "")
        category
        path
        title
        description
      }
      body
    }
  }
`

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `