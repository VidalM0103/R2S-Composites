import { Carousel } from "flowbite-react"

export default function Achievements() {

    return (
        <>
            <header className="bg-yellow-300 text-white p-6 mt-24 font-poppins">
                <h1 className="text-3xl font-bold [text-shadow:_3px_3px_rgb(0_0_0_/40%)]">R2S Industrie - Réalisations</h1>
            </header>

            <main className="text-white bg-gray-800 font-poppins min-h-[calc(100vh-180px)] flex items-center justify-center">
                <section className="h-[calc(600px)] w-[calc(1200px)]">
                    <Carousel slide={false}>
                        <div className="flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <img className="max-w-[calc(600px)]" src="chantier-1-1.png" alt="" />
                            <img className="max-w-[calc(600px)]" src="chantier-1-2.png" alt="" />
                        </div>
                        <div className="flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <img className="max-w-[calc(600px)]" src="chantier-2-1.png" alt="" />
                            <img className="max-w-[calc(600px)]" src="chantier-2-2.png" alt="" />
                        </div>
                        <div className="flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <img className="max-w-[calc(600px)]" src="chantier-3-1.png" alt="" />
                            <img className="max-w-[calc(600px)]" src="chantier-3-2.png" alt="" />
                        </div>
                    </Carousel>
                </section>
            </main >
        </>
    );
}