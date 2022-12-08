import Link from 'next/link'
import React from 'react'

const Post = ({ posts }) => {
    return (
        <>
            {posts.map((post) => (
                <div className='card w-50 m-2' key={post.id}>
                    <Link href = {`/posts/${post.id}`}>
                        <h2>{post.id}. {post.title}</h2>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default Post

export const getStaticProps = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await res.json()
    return {
        props: { posts: data }
    }
}