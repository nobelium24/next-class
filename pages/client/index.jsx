import React, { useEffect, useState } from 'react'
import useSWR from "swr"

const fetcher = async () => {
    let res = await fetch(`http://localhost:4000/products/1`)
    let data = await res.json()
    return data
}
const ClientFteching = () => {
    // const [data, setData] = useState([])
    // const [isLoading, setisLoading] = useState(true)
    // useEffect(() => {
    //     getApi()
    // }, [])
    // const getApi = async () => {
    //     let res = await fetch("http://localhost:4000/products")
    //     let data = await res.json()
    //     setData(data)
    //     setisLoading(false)
    //     console.log(data);
    // }
    // or
    const {data, error} = useSWR("client", fetcher)
    if (error) return <h1>Failed to load</h1>
    if (!data) return <h2>Loading...</h2>
    return (
        <div className="card w-25 my-2 mx-5 shadow-lg px-3">
            <h2>{data.name}</h2>
            <p>{data.price}</p>
        </div>
    )
}

export default ClientFteching