import React from 'react'

import styled from 'styled-components'
import Link from 'next/link'
import Footer from '../components/footer'
import Head from 'next/head'
import Image from 'next/image'
// import style from "../styles/Index.module.css";
const Home = () => {
  const myStyle = { backgroundColor: "green" }
  const H4 = styled.h4`
  background-color:green;
  color:blue;
  `
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1 className="bg bg-info">Hello</h1>
      <H4>Hello wole</H4>
      <Link href="/home">Home</Link>
      {/* <img src="/codm1.jpg"/> */}
      <Image src="/codm1.jpg" width="500" height="200"/>
    </>
  )
}

export default Home
Home.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
} 