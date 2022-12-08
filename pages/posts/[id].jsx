import { useRouter } from 'next/router'
import React from 'react'

const MoreDetails = ({ post }) => {
    let router = useRouter()
    if (router.isFallback) {
        return <div>Loding...</div>
    }
    return (
        <div>. {post.title}</div>
    )
}

export default MoreDetails
export async function getStaticPaths() {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    let data = await res.json()
    let paths = data.map((post) => {
        return { params: { id: `${post.id}` } }
    })
    // return {
    //     paths: paths,
    //     fallback: false
    // }
    return {
        paths: [
            { params: { id: "1" } },
            { params: { id: "2" } },
            { params: { id: "3" } }
        ],
        fallback: true,
        // revalidate : 10
    }
}
export async function getStaticProps(context) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    let data = await res.json()
    return {
        props: { post: data }
    }
}