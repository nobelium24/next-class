import { useRouter } from 'next/router'
import React from 'react'

const Parameter = () => {
    let router = useRouter()
    console.log(router.query);
  return (
    <div>Parameter {router.query.username}</div>
  )
}

export default Parameter