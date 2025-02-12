import Posts from "./components/Posts"

export const revalidate = 10
export default function Home() {
  return (
    <main className="bg-slate-800 mx-auto px-6 w-100">
      <p className="text-white my-12 text-3xl text-center "> 
          Ciao 🙌&nbsp;
        <span className="whitespace-nowrap"> 
         sono {/* I&apos;m */} <span className="text-green-300"> Palma </span> 🌴
        </span>
      </p>
      <Posts/>
    </main>
  )
}
