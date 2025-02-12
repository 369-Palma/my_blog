'use client'

import SingleCardCategory from "./components/SingleCardCategory";


export const revalidate = 10;
export default function Home() {
/* const router = useRouter() */

  //Handlers
/*   const handleNavigateToFilteredPosts = (category:string) => {
    console.log("categoria: ", category)
    router.push(`posts?category=${category}`)
  }
 */
  return (
    <main className="bg-slate-800 mx-auto px-6 w-100">
      <p className="text-white mt-12 text-3xl text-center ">
        Ciao 🙌&nbsp;
        <span className="whitespace-nowrap">
          sono <span className="text-green-300"> Palma </span>{" "}
          🌴
        </span>
      </p>
      <p className="text-gray-300 text-center my-12 tracking-custom text-xl italic">Di cosa vuoi leggere oggi? <br/> Scegli la tua categoria!"</p>
      <section className="flex w-full text-xl text-white align-center justify-center gap-6 text-center flex-col md:flex-row ">
        <SingleCardCategory
          category={"stories"}
          title={"Storie e riflessioni sulla natura"}
        />
        <SingleCardCategory
          title={"Pubblicazioni e Ricerche"}
          category={"education"}
        />
      </section>
    </main>
  );
}
