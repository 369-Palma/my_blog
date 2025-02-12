import Link from "next/link"
import { FaHome } from "react-icons/fa"

export default function Greetings() {
  return (
    <main className="text-center text-white mt-10
     ">
    <h1 className="text-4xl"> Thank you for your message!</h1>
    <Link href="/">
      <FaHome className="dark:text-white/80 hover:text-white text-4xl mx-auto mt-6 "> </FaHome>
    </Link>
    </main>
  )
}
