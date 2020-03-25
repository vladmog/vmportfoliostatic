// import React from "react"
// import { Link } from "gatsby"

// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )


// const Layout = ({ children }) => (
//   <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
//     <header style={{ marginBottom: `1.5rem` }}>
//       <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
//         <h3 style={{ display: `inline` }}>MySweetSite</h3>
//       </Link>
//       <ul style={{ listStyle: `none`, float: `right` }}>
//         <ListLink to="/">Home</ListLink>
//         <ListLink to="/about/">About</ListLink>
//         <ListLink to="/contact/">Contact</ListLink>
//       </ul>
//     </header>
//     {children}
//   </div>
// )

// export default Layout;

// ==================================================================
// ==================================================================

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "typeface-chivo"
import "typeface-archivo"
import "typeface-archivo-black"
import "typeface-dm-sans"
import "typeface-gentium-basic"

import Nav from "./nav"

const S = {}

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Archivo Black', sans-serif;    
  width: (100vw - (100vw - 100%));
  // width: 100vw;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
`
S.Content = styled.div`
  margin: auto;
  margin-top: 8vh;
`


const Layout = ({ children }) => (
  <div>
    <Nav />
    <S.Content>{children}</S.Content>
  </div>
)

export default Layout;