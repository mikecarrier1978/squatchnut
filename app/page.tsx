import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="relative w-full">
      <div className="h-lvh w-svw relative overflow-hidden">
      <video autoPlay muted loop playsInline preload="metadata" className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 min-h-full min-w-full object-cover max-w-fit">
        <source src="/main-vid.mp4" type="video/mp4" />
      </video>
      </div>
      <div className="absolute top-1/3 left-0 animate-fly-in-left delay-300">
    <p className="text-white text-4xl md:text-6xl font-bold uppercase mb-10">
      Release your inner squatch
    </p>
        <Image src="/orange-logo.png" alt="Squatch Logo" width={200} height={200} className='block my-0 mx-auto' />
      </div>
    </section>
    <section className='relative w-full h-auto mt-14'>
      <h1 className='text-5xl font-bold uppercase text-center divide-red-700 div'>Squatchnut Merch</h1>
    </section>
    </>
  );
}
