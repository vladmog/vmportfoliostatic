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
        Anyway, I'm polishing up my portfolio projects, and putting together this portfolio page probably as you're reading this.
        My github handle is <a href = "https://github.com/vladmog">vladmog</a>.
      </p>
      <p>
        
      </p>
    </S.Container>
  </Layout>
)