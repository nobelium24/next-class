import { useRouter } from 'next/router'
import React from 'react'

const More = () => {
  let router = useRouter()
  const takeUsHome = () => {
    alert("Hello World")
    router.push("/")
  }
  return (
    <>
      <h1>More</h1>
      <button onClick={takeUsHome}>Take me home</button>
    </>
  )
}

export default More