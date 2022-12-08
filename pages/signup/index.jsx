import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const [firstname, usefirstname] = useState("")
    const [lastname, uselastname] = useState("")
    const [email, useemail] = useState("")
    const [password, usepassword] = useState("")
    const signUp = () => {
        const data = {firstname, lastname, email, password}
        const link = "http://localhost:3000/api/signup"
        axios.post(link, data).then((res)=>{
            console.log(res.data);
        })
    }
    return (
        <>
            <main className='d-flex justify-content-center'>
                <div className='card w-50 shadow-lg px-3 py-3'>
                    <h1>Sign Up</h1>
                    <input placeholder='First name' type="text" className='my-2 form-control w-100' onChange={(e)=>usefirstname(e.target.value)} />
                    <input placeholder='Last name' type="text" className='my-2 form-control w-100' onChange={(e)=>uselastname(e.target.value)}/>
                    <input placeholder='Email' type="text" className='my-2 form-control w-100' onChange={(e)=>useemail(e.target.value)}/>
                    <input placeholder='Password' type="text" className='my-2 form-control w-100' onChange={(e)=>usepassword(e.target.value)}/>
                    <button className='btn btn-outline-success w-25' onClick={signUp}>Sign up</button>
                </div>
            </main>
        </>
    )
}

export default Signup