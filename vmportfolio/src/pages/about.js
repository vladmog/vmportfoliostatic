import React from "react"
import Layout from "../components/layout"
import me from "../images/noback.png"
import styled from "styled-components";

const S = {};

S.Me = styled.img`
  width: 40%;
`

export default () => (
  <Layout>
]    <S.Me src = {me} />

  </Layout>
)