import getFormattedDate from "@/lib/getFormattedDate"
import { getPostData, getSortedPostsData } from "@/lib/posts"
import Link from "next/link"
import { notFound } from "next/navigation"
import { FaHome } from "react-icons/fa"

/* Making the posts page static */
export function generateStaticParams() {
    const posts = getSortedPostsData() //deduped --> non manda la stessa richiesta di nuovo ma usa quella precedente
    return posts.map((post) => ({
        postId: post.id
    }))
}
export function generateMetadata({params} : {params: {postId: string }}) {

    const posts = getSortedPostsData() //deduped
    const {postId} = params

    const post = posts.find(post => post.id === postId)

if(!post) {
    return {
        title: "Post Not Found",
    }
}

    return {
        title:post.title,
    }
}

export default async function Post({params} : {params: {postId: string }}) {

    const posts = getSortedPostsData() //deduped --> non manda la stessa richiesta di nuovo ma usa quella precedente
    const {postId} = params

    if(!posts.find(post => post.id === postId)){
        return notFound()
    }

    const {title, date, contentHtml} = await getPostData(postId)

    const pubDate = getFormattedDate(date)

  return (
        <main className="mt-10 px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
            <h1 className="text-3xl mt-4 mb-0"> {title} </h1>
            <p className="mt-0"> {pubDate}</p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                {/* <p>
                    <Link className="underline" href="/"> Back to Home</Link>
                </p> */}
                <Link href="/">
                <FaHome className="dark:text-white/80 hover:text-white text-2xl mb-10 mt-0"> 
                    {/* <Link href="/" className="underline"> Back to Home</Link> */}
                </FaHome>
                </Link>
            </article>
        </main>   
  )
}
