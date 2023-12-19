import Link from "next/link"
import {FaGithub, FaEnvelope} from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="bg-slate-600 bg-blue/90 p-4 sticky drop-shadow-xl z-10">
        <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
            <h2 className="text-3xl font-bold grid place-content-center mb-2 md:md-0"> 
                <Link href="/" className="text-white/90 no-underline
                hover:text-green-600">
                    Palma Iacobelli
                </Link>   
            </h2>
            <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
                <Link className="text-white/90 hover:text-green-600" href="https://github.com/369-Palma" target="_blank">
                    <FaGithub/>
                </Link>
                <Link className="text-white/90 hover:text-green-600" href="mailto:palmaiacobelli92@gmail.com" target="_blank">
                    <FaEnvelope/>
                </Link>
            </div>

        </div>
    </nav>
  )
}
