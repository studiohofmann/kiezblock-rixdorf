import React from "react"
import Layout from "../components/layouts/layout"
import HeaderImage from "../components/index/header-image"
import Introduction from "../components/index/introduction"
import Demands from "../components/index/demands"
import Supporters from "../components/index/supporters"
import NewsPreview from "../components/index/news-preview"
import { Helmet } from "react-helmet"

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kiezblock Rixdorf</title>
        <link rel="canonical" href="https://kiezblock-rixdorf.de/" />
      </Helmet>
      <HeaderImage />
      <Introduction />
      <Demands />
      <Supporters />
      <NewsPreview />
    </Layout>
  )
}
