import { getSortedPostsData } from "@/lib/posts"
import ListItems from "./ListItems";
import Link from "next/link" 
import { FaHome } from "react-icons/fa"

export default function Posts
    (category: string) {
      let posts = getSortedPostsData();
      if (category === "education") {
        posts = posts.filter((post: BlogPost) => {
          post.category === "publication" || post.category === "education";
        });
      } else {
        posts = posts.filter((post: BlogPost) => {
          post.category === "story" || post.category === "insight";
        });
      }
    
      return (
        <section className="mt-12 mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
          <ul className="w-full mb-6">
            {posts.map((post) => (
              <ListItems key={post.id} post={post} />
            ))}
          </ul>
          <Link href="/">
                <FaHome className="dark:text-white/80 hover:text-white text-2xl mb-10 mt-0"> 
                    {/* <Link href="/" className="underline"> Back to Home</Link> */}
                </FaHome>
                </Link>
        </section>
      );
    }

    /* const posts = getSortedPostsData();

  return (
   <section className="mt-12 mx-auto max-w-2xl">
    <h2 className="text-4xl font-bold dark:text-white/90">
        Blog
    </h2>
    <ul className="w-full mb-6">
        {posts.map(post => (
            <ListItems key={post.id} post={post}/>
        ))}
    </ul>
   </section>
  ) 
}*/
