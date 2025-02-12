import Link from "next/link";
import { FaHome } from "react-icons/fa";
import ListItems from "../components/ListItems";
import { getSortedPostsData } from "@/lib/posts";

export default function PostsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = searchParams.category || "";

  let posts = getSortedPostsData();

  if (category === "education") {
    posts = posts.filter(
      (post) => post.category === "publication" || post.category === "education"
    );
  } else {
    posts = posts.filter(
      (post) => post.category === "story" || post.category === "insight"
    );
  }

  return (
    <main className="bg-slate-800 mx-auto px-6 w-100">
      <section className="mt-12 mx-auto max-w-2xl">
        <div className="flex justify-between border-b border-gray-600 mb-5">
          <h2 className="text-4xl font-bold dark:text-white/90 my-3">Blog</h2>
          <Link className="mr-5" href="/">
            <FaHome className="dark:text-white/80 hover:text-white text-3xl mb-3 mt-6"></FaHome>
          </Link>
        </div>

        <ul className="flex flex-col gap-6 w-full mb-6">
          {posts.map((post) => (
            <ListItems key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </main>
  );
}
