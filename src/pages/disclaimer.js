import React from "react"
import Layout from "../components/layout"
import DisclaimerInfo from "../components/disclaimer-info"
import PrivacyInfo from "../components/privacy-info"

export default function Disclaimer({ data }) {
  return (
    <Layout>
      <DisclaimerInfo />
      <PrivacyInfo />
    </Layout>
  )
}
