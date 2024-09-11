import { Carousel } from "flowbite-react"

export default function Achievements() {

    return (
        <>
            <header className="bg-yellow-300 text-white p-6 mt-24 font-poppins">
                <h1 className="text-3xl font-bold">R2S Piscine - Réalisations</h1>
            </header>

            <main className="text-white bg-gray-800 font-poppins min-h-[calc(100vh-180px)] flex items-center justify-center">
                <section className="w-[calc(1200px)] h-[calc(600px)]">
                    <Carousel slide={false}>
                        <div className="relative flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white w-auto">
                            <h2 className="text-2xl font-bold text-white flex-none absolute top-0 bg-gray-700 bg-opacity-75 w-full text-center p-4">Mise en place du chantier, montage de l’abris de protection</h2>
                            <img className="max-w-[calc(400px)]" src="projet-1-1.png" alt="" />
                            <img className="max-w-[calc(400px)]" src="projet-1-2.png" alt="" />
                            <img className="max-w-[calc(400px)]" src="projet-1-3.png" alt="" />
                        </div>
                        <div className="relative flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white w-auto">
                            <h2 className="text-2xl font-bold text-white flex-none absolute top-0 bg-gray-700 bg-opacity-75 w-full text-center p-4">Avant réfection</h2>
                            <img className="max-w-[calc(600px)]" src="projet-2-1.png" alt="" />
                            <img className="max-w-[calc(600px)]" src="projet-2-2.png" alt="" />
                        </div>
                        <div className="relative flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white w-auto">
                            <h2 className="text-2xl font-bold text-white flex-none absolute top-0 bg-gray-700 bg-opacity-75 w-full text-center p-4">Après réfection</h2>
                            <img className="max-w-[calc(400px)]" src="projet-3-1.png" alt="" />
                            <img className="max-w-[calc(400px)]" src="projet-3-2.png" alt="" />
                            <img className="max-w-[calc(400px)]" src="projet-3-3.png" alt="" />
                        </div>
                        <div className="relative flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <h2 className="text-2xl font-bold text-white flex-none absolute top-0 bg-gray-700 bg-opacity-75 w-full text-center p-4">Piscine en eau</h2>
                            <img className="max-w-[calc(600px)]" src="projet-4-1.png" alt="" />
                            <img className="max-w-[calc(600px)]" src="projet-4-2.png" alt="" />
                        </div>
                        <div className="relative flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <h2 className="text-2xl font-bold text-white flex-none absolute top-0 bg-gray-700 bg-opacity-75 w-full text-center p-4">Avant / Après</h2>
                            <img className="max-w-[calc(600px)]" src="projet-5-1.png" alt="" />
                            <img className="max-w-[calc(600px)]" src="projet-5-2.png" alt="" />
                        </div>
                        <div className="relative flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <h2 className="text-2xl font-bold text-white flex-none absolute top-0 bg-gray-700 bg-opacity-75 w-full text-center p-4">Avant / Après</h2>
                            <img className="max-w-[calc(600px)]" src="projet-6-1.png" alt="" />
                            <img className="max-w-[calc(600px)]" src="projet-6-2.png" alt="" />
                        </div>
                        <div className="relative flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <h2 className="text-2xl font-bold text-white flex-none absolute top-0 bg-gray-700 bg-opacity-75 w-full text-center p-4">Avant / Après</h2>
                            <img className="max-w-[calc(600px)]" src="projet-7-1.png" alt="" />
                            <img className="max-w-[calc(600px)]" src="projet-7-2.png" alt="" />
                        </div>
                        <div className="relative flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <h2 className="text-2xl font-bold text-white flex-none absolute top-0 bg-gray-700 bg-opacity-75 w-full text-center p-4">Avant / Après</h2>
                            <img className="max-w-[calc(600px)]" src="projet-8-1.png" alt="" />
                            <img className="max-w-[calc(600px)]" src="projet-8-2.png" alt="" />
                        </div>
                    </Carousel>
                </section>
            </main >
        </>
    );
}