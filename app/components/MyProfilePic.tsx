import Image from "next/image"

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
        <Image
        className="border-2 border-black
        dark:border-yellow-50 drop-shadow-xl
        shadow-yellow-50
        rounded-full
        mx-auto
        mt-8"
        src="/images/fotoProfilo.png"
        width={200}
        height={200}
        alt="Palma Iacobelli"
        priority={true}
        />
    </section>
  )
}
