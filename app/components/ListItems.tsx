import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"
import React from 'react'

type Props = {
    post:BlogPost
}

export default function ListItems({post}: Props) {
    const {id, title, date, category} = post
const formattedDate = getFormattedDate(date)

  return (
    <li className="mt-4 text-2xl dark:text-white/90"> {/* dark:text-white/90 */}
        <Link 
        href={`/posts/${id}`}
        className="text-green-300 hover:text-black/70 dark:hover:text-gray-300"
        > {title}</Link>
        <br/>
        <div className="w-full flex justify-between flex-col md:flex-row">
          <p className="text-sm mt-3 "> {formattedDate} </p>
          <span className="self-start w-auto mt-3 text-sm text-gray-400 ts-italics mt-1 mr-5 border border-green-200 px-2 py-1 rounded-full tracking-wider md:mt-0"> {category?? null} </span>
        </div>
    </li>
  )
}
