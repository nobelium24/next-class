import React from 'react'

const Users = (props) => {
    // console.log(props);
    return (
        <>
            <div>{props.users.map((users) => (
                <div key={users.id}>
                    <div>
                        <h1>{users.name}</h1>
                    </div>

                </div>

            ))}
            </div>
        </>
    )
}

export default Users
export const getStaticProps = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await res.json()
    return {
        props: { users: data }
    }
}