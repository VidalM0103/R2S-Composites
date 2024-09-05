import { Carousel } from "flowbite-react"

export default function Achievements() {
    return (
        <>
            <header className="bg-yellow-300 text-white p-6 mt-24 font-poppins">
                <h1 className="text-3xl font-bold">R2S Naval - Réalisations</h1>
            </header>

            <main className="text-white bg-gray-800 font-poppins">
                <section className="min-h-[calc(100vh-180px)] flex flex-col items-center justify-around">
                    <div className="h-[calc(600px)] w-[calc(1200px)] flex items-center">
                        <Carousel slide={false}>
                            <div className="flex h-full justify-center items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-1-1.png"} alt="" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-1-2.png"} alt="" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-1-3.png"} alt="" />
                                </div>
                            </div>
                            <div className="flex h-full justify-center items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-2-1.png"} alt="" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-2-2.png"} alt="" />
                                </div>

                            </div>
                            <div className="flex h-full justify-center items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-3-1.png"} alt="" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-3-2.png"} alt="" />
                                </div>
                            </div>
                            <div className="flex h-full justify-center items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-4-1.png"} alt="" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-4-2.png"} alt="" />
                                </div>
                            </div>
                            <div className="flex h-full justify-center items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-5-1.png"} alt="" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-5-2.png"} alt="" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-5-3.png"} alt="" />
                                </div>
                            </div>
                            <div className="flex h-full justify-center items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-6-1.png"} alt="" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-6-2.png"} alt="" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-6-3.png"} alt="" />
                                </div>
                            </div>
                            <div className="flex h-full justify-center items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-7-1.png"} alt="" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-7-2.png"} alt="" />
                                </div>
                                {/** 
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-7-3.png"} alt="" />
                                </div>
                                */}
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-7-4.png"} alt="" />
                                </div>
                            </div>
                            <div className="flex h-full justify-center items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-8-1.png"} alt="" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-8-2.png"} alt="" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-8-3.png"} alt="" />
                                </div>
                            </div>
                            <div className="flex h-full justify-center items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-9-1.png"} alt="" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-9-2.png"} alt="" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-9-3.png"} alt="" />
                                </div>
                            </div>
                            <div className="flex h-full justify-center items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-10-1.png"} alt="" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-10-2.png"} alt="" />
                                </div>
                            </div>
                            <div className="flex h-full justify-center items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-11-1.png"} alt="" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-11-2.png"} alt="" />
                                </div>
                                {/** 
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-11-3.png"} alt="" />
                                </div>
                                */}
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-11-4.png"} alt="" />
                                </div>
                            </div>
                            <div className="flex h-full justify-center items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-12-1.png"} alt="" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/realisations/chantier-12-2.png"} alt="" />
                                </div>
                            </div>
                        </Carousel>
                    </div>

                </section>
            </main >
        </>
    );
}