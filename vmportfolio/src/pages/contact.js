import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const S = {};

S.Container = styled.div`
  margin-top: 8vh
`

export default () => (
  <Layout>
    <S.Container>
      <hr />
      <h1>Well this is awkward.</h1>
      <p>
        To be honest I wasn't expecting anyone to see this page yet... but here you are.
      </p>
      <p>
        Anyway, if you'd like to contact me, feel free to email me at <a href="mailto:vladmog@gmail.com">vladmog@gmail.com</a>,
        or DM me on Instagram at <a href = "https://www.instagram.com/lightcatch/">lightcatch</a>. You can also tweet me at 
         <a href = "https://twitter.com/vladeeo"> vladeeo</a>.
      </p>
      <p>
        
      </p>
    </S.Container>
  </Layout>
)