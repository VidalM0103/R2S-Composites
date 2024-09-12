import { Carousel } from "flowbite-react"

export default function Achievements() {
    return (
        <>
            <header className="bg-yellow-300 text-white p-6 mt-24 font-poppins">
                <h1 className="text-3xl font-bold [text-shadow:_3px_3px_rgb(0_0_0_/40%)]">R2S Naval - Réalisations</h1>
            </header>
            <main className="text-white bg-gray-800 font-poppins min-h-[calc(100vh-180px)] flex items-center justify-center">
                <section className="h-[calc(600px)] w-[calc(1200px)]">
                    <Carousel slide={false}>
                        <div className="flex h-full justify-around bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <img className="max-w-[calc(400px)]" src="chantier-1-1.png" alt="" />
                            <img className="max-w-[calc(400px)]" src="chantier-1-2.png" alt="" />
                            <img className="max-w-[calc(400px)]" src="chantier-1-3.png" alt="" />
                        </div>
                        <div className="flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <img className="max-w-[calc(600px)]" src="chantier-2-1.png" alt="" />
                            <img className="max-w-[calc(600px)]" src="chantier-2-2.png" alt="" />
                        </div>
                        <div className="flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <img className="max-w-[calc(600px)]" src="chantier-3-1.png" alt="" />
                            <img className="max-w-[calc(600px)]" src="chantier-3-2.png" alt="" />
                        </div>
                        <div className="flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <img className="max-w-[calc(600px)]" src="chantier-4-1.png" alt="" />
                            <img className="max-w-[calc(600px)]" src="chantier-4-2.png" alt="" />
                        </div>
                        <div className="flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <img className="max-w-[calc(400px)]" src="chantier-5-1.png" alt="" />
                            <img className="max-w-[calc(400px)]" src="chantier-5-2.png" alt="" />
                            <img className="max-w-[calc(400px)]" src="chantier-5-3.png" alt="" />
                        </div>
                        <div className="flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <img className="max-w-[calc(400px)]" src="chantier-6-1.png" alt="" />
                            <img className="max-w-[calc(400px)]" src="chantier-6-2.png" alt="" />
                            <img className="max-w-[calc(400px)]" src="chantier-6-3.png" alt="" />
                        </div>
                        <div className="flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <img className="max-w-[calc(400px)]" src="chantier-7-1.png" alt="" />
                            <img className="max-w-[calc(400px)]" src="chantier-7-2.png" alt="" />

                            {/** 
                                    <img src="chantier-7-3.png" alt="" />
                                */}
                            <img className="max-w-[calc(400px)]" src="chantier-7-4.png" alt="" />
                        </div>
                        <div className="flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <img className="max-w-[calc(400px)]" src="chantier-8-1.png" alt="" />
                            <img className="max-w-[calc(400px)]" src="chantier-8-2.png" alt="" />
                            <img className="max-w-[calc(400px)]" src="chantier-8-3.png" alt="" />
                        </div>
                        <div className="flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <img className="max-w-[calc(400px)]" src="chantier-9-1.png" alt="" />
                            <img className="max-w-[calc(400px)]" src="chantier-9-2.png" alt="" />
                            <img className="max-w-[calc(400px)]" src="chantier-9-3.png" alt="" />
                        </div>
                        <div className="flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <img className="max-w-[calc(600px)]" src="chantier-10-1.png" alt="" />
                            <img className="max-w-[calc(600px)]" src="chantier-10-2.png" alt="" />
                        </div>
                        <div className="flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <img className="max-w-[calc(400px)]" src="chantier-11-1.png" alt="" />
                            <img className="max-w-[calc(400px)]" src="chantier-11-2.png" alt="" />
                            {/** 
                                    <img src="chantier-11-3.png" alt="" />
                                */}
                            <img className="max-w-[calc(400px)]" src="chantier-11-4.png" alt="" />
                        </div>
                        <div className="flex h-full justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <img className="max-w-[calc(600px)]" src="chantier-12-1.png" alt="" />
                            <img className="max-w-[calc(600px)]" src="chantier-12-2.png" alt="" />
                        </div>
                    </Carousel>
                </section>
            </main >
        </>
    );
}