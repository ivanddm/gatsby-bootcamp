import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <h1>Hello.</h1>
        <h2>
          I'm Ivan, a full-stack developer. More <Link to="/about">here.</Link>
        </h2>
        <p>
          Need a developer? <Link to="/contact">Contact me.</Link>
        </p>
      </Layout>
    </div>
  )
}

export default IndexPage
