"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { FaHome } from "react-icons/fa"

const initState = {
    name:"",
    email: "",
    message: "",
}

export default function Feedback(){
const [data, setData] = useState(initState)
const router = useRouter()

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(data))
    const {name, email, message} = data


/* SEND DATA TO API ROUTE */
const res = await fetch(
    `http://localhost:3000/api/feedback`,
    {
        method: "POST",
        headers: {
            "ContentType": "application/json",
        },
        body: JSON.stringify({
            name, email, message
        })
    })

    // Navigate to thank you 
    router.push(`/thanks/`)
   
}

const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const name = e.target.name

    setData(prevData => ({
        ...prevData,
        [name]: e.target.value
    }))
}

const canSave = [...Object.values(data)].every(Boolean)

const content = (
    <main className="text-white mx-auto prose prose-xl ">
    <form onSubmit={handleSubmit} className="text-white flex flex-col mx-auto max-w-3xl p-6">

        <h1 className="font-bold text-3xl mb-10 text-white">Contact Me</h1>

        <label className="text-2xl mb-1" htmlFor="name">Name:</label>
        <input
            className="p-3 mb-6 text-2xl rounded-2xl text-black"
            type="text"
            id="name"
            name="name"
            placeholder="Jane"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.name}
            onChange={handleChange}
            autoComplete="off"
            autoFocus
        />

        <label className="text-2xl mb-1" htmlFor="email">Email:</label>
        <input
            className="p-3 mb-6 text-2xl rounded-2xl text-black"
            type="email"
            id="email"
            name="email"
            placeholder="Jane@yoursite.com"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            value={data.email}
            onChange={handleChange}
            autoComplete="off"
        />

        <label className="text-2xl mb-1" htmlFor="message">Message:</label>
        <textarea
            className="p-3 mb-6 text-2xl rounded-2xl text-black"
            id="message"
            name="message"
            placeholder="Your message..."
            rows={5}
            cols={33}
            value={data.message}
            onChange={handleChange}
            autoComplete="off"
        />

        <button
            className="p-3 mb-6 text-2xl rounded-2xl text-white border-solid border-white border-2 max-w-xs bg-slate-400 hover:cursor-pointer hover:bg-green-400 hover:text-slate-800 disabled:hidden"
            disabled={!canSave}
        >Submit</button>

    </form>
    <Link href="/">
    <FaHome className="dark:text-white/80 hover:text-white text-2xl mb-10 mt-0"> 
        {/* <Link href="/" className="underline"> Back to Home</Link> */}
    </FaHome>
    </Link>
    </main>
)

return content
}