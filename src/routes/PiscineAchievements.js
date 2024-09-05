import { Carousel } from "flowbite-react"

export default function Achievements() {

    return (
        <>
            <header className="bg-yellow-300 text-white p-6 mt-24 font-poppins">
                <h1 className="text-3xl font-bold">R2S Piscine - Réalisations</h1>
            </header>

            <main className="text-white bg-gray-800 font-poppins">
                <section className="min-h-[calc(100vh-180px)] flex flex-col items-center justify-around">
                    <h2 className="text-2xl font-bold text-white mb-4">Mise en place du chantier, montage de l’abris de protection</h2>
                    <div className="h-[calc(600px)] w-[calc(1200px)] flex items-center">

                        <Carousel slide={false}>
                            <div className="flex h-full justify-center items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div>
                                    <img src="projet-1.png" alt="" />
                                </div>
                                <div>
                                    <img src="projet-2.png" alt="" />
                                </div>
                                <div>
                                    <img src="projet-3.png" alt="" />
                                </div>
                            </div>

                        </Carousel>
                    </div>

                </section>
            </main >
        </>
    );
}