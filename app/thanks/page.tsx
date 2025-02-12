import Link from "next/link"
import { FaHome } from "react-icons/fa"

export default function Greetings() {
  return (
    <main className="text-center text-white mt-10
     ">
    <h1 className="text-4xl"> Thank you for your message!</h1>
    {/* <p className="text-white/70 hover:text-white text-2xl mt-10">
        <Link href="/" className="underline"> Go Back Home</Link>
    </p> */}
    <Link href="/">
    <FaHome className="dark:text-white/80 hover:text-white text-4xl mx-auto mt-6 "> 
        {/* <Link href="/" className="underline"> Back to Home</Link> */}
    </FaHome>
    </Link>
    </main>
  )
}
