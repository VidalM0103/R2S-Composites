export default function Test() {
    return (
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-96px)] mt-[calc(96px)]">
            <div className="h-72"></div>
            <section className="w-[calc(1000px)] bg-black p-2">
                <div className="group relative w-full transition-all ease-in-out duration-500 hover:duration-1000 h-60 hover:h-96 [clip-path:polygon(0_0,100%_0,100%_80%,0%_100%)] hover:[clip-path:polygon(0_0,100%_0,100%_88%,0%_100%)]">
                    <img src="/expertise/expertise-bateau-reunion.jpeg" alt="hero" className="w-full h-full object-cover blur-sm group-hover:blur-none" />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:justify-around">
                        <ul className="hidden list-disc pl-8 group-hover:flex group-hover:flex-col group-hover:justify-center group-hover:items-center group-hover:gap-4 ">
                            <li className="bg-clip-text text-transparent bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-600 drop-shadow-[0_1.3px_1.3px_rgba(0,0,0,0.8)] text-xl text-bold">Expertise de pré-Transactionnelle.</li>
                            <li className="bg-clip-text text-transparent bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-600 drop-shadow-[0_1.3px_1.3px_rgba(0,0,0,0.8)] text-xl">Expertise de pré-Assurance.</li>
                            <li className="bg-clip-text text-transparent bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-600 drop-shadow-[0_1.3px_1.3px_rgba(0,0,0,0.8)] text-xl">Expertise de sinistre.</li>
                            <li className="bg-clip-text text-transparent bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-600 drop-shadow-[0_1.3px_1.3px_rgba(0,0,0,0.8)] text-xl">Suivi de chantier.</li>
                            <li className="bg-clip-text text-transparent bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-600 drop-shadow-[0_1.3px_1.3px_rgba(0,0,0,0.8)] text-xl">Bilan osmotique (plan de sonde cardinale).</li>
                        </ul>
                        <h1 className="bg-clip-text text-transparent bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-600 text-4xl font-bold drop-shadow-[0_1.3px_1.3px_rgba(0,0,0,0.8)] group-hover:transition-all ease-in-out duration-1000">R2S Expertise</h1>
                    </div>
                </div>
                <div className="group relative w-full transition-all ease-in-out duration-500 hover:duration-1000 h-60 hover:h-96 [clip-path:polygon(0_20%,100%_0,100%_100%,0_80%)] hover:[clip-path:polygon(0_12%,100%_0,100%_100%,0_88%)] -mt-10">
                    <img src="/naval/presentation/prestation-naval-3-2.jpeg" alt="hero" className="w-full h-full object-cover " />
                    <div className="absolute group-hover:top-12 top-1/2 text-center w-full">
                        <h1 className="text-white text-4xl font-bold mb-8">R2S Expertise</h1>
                        <ul className="hidden list-disc pl-8 group-hover:flex group-hover:flex-col group-hover:justify-center group-hover:items-center group-hover:gap-4">
                            <li className="text-white text-xl">Lorem ipsum dolor sit amet.</li>
                            <li className="text-white text-xl">Lorem ipsum dolor sit amet.</li>
                            <li className="text-white text-xl">Lorem ipsum dolor sit amet.</li>
                            <li className="text-white text-xl">Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                </div>
                <div className="group relative w-full transition-all ease-in-out duration-500 hover:duration-1000 h-60 hover:h-96 [clip-path:polygon(0_0,100%_20%,100%_80%,0_100%)] hover:[clip-path:polygon(0_0,100%_12%,100%_88%,0_100%)] -mt-10">
                    <img src="/industrie/chantier-3-1.png" alt="hero" className="w-full h-full object-cover " />
                    <div className="absolute group-hover:top-12 top-1/2 text-center w-full transition-transform duration-800">
                        <h1 className="text-white text-4xl font-bold mb-8">R2S Expertise</h1>
                        <ul className="hidden list-disc pl-8 group-hover:flex group-hover:flex-col group-hover:justify-center group-hover:items-center group-hover:gap-4">
                            <li className="text-white text-xl">Lorem ipsum dolor sit amet.</li>
                            <li className="text-white text-xl">Lorem ipsum dolor sit amet.</li>
                            <li className="text-white text-xl">Lorem ipsum dolor sit amet.</li>
                            <li className="text-white text-xl">Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                </div>
                <div className="group relative w-full transition-all ease-in-out duration-1000 h-60 hover:h-96 [clip-path:polygon(0_20%,100%_0,100%_100%,0_100%)] hover:[clip-path:polygon(0_12%,100%_0,100%_100%,0_100%)] -mt-10">
                    <img src="/piscine/projet-3-3.png" alt="hero" className="w-full h-full object-cover " />
                    <div className="absolute group-hover:top-12 top-1/2 text-center w-full">
                        <h1 className="text-white text-4xl font-bold mb-8">R2S Expertise</h1>
                        <ul className="hidden list-disc pl-8 group-hover:flex group-hover:flex-col group-hover:justify-center group-hover:items-center group-hover:gap-4">
                            <li className="text-white text-xl">Lorem ipsum dolor sit amet.</li>
                            <li className="text-white text-xl">Lorem ipsum dolor sit amet.</li>
                            <li className="text-white text-xl">Lorem ipsum dolor sit amet.</li>
                            <li className="text-white text-xl">Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="h-72"></div>

        </main >
    )
}