/* "use client";
 */
import Link from "next/link";

export default function SingleCardCategory({
  title,
  category,
}: {
  title: string;
  category: string;
}) {
  return (
    <Link
      className="font-bold tracking-wider w-full py-8 px-4 text-white bg-emerald-600 cursor-pointer rounded hover:bg-emerald-200 hover:text-gray-600 md:w-1/5"
      href={{ pathname: "/posts", query: { category } }}
    >
      <div>{title}</div>
    </Link>
  );
}
