import Link from "next/link"

export default function notFound() {
    return(
        <>
        <h1>The requested post does not exist.</h1>
        <p> <Link href="/posts"> Back to the Posts</Link></p>
</>
    )
}