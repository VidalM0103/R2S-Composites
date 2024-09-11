import { Carousel } from "flowbite-react"

export default function Naval() {
    return (
        <>
            <header className="bg-yellow-300 text-white p-6 mt-24 font-poppins">
                <h1 className="text-3xl font-bold">R2S Naval - Présentation</h1>
            </header>

            <main className="text-white bg-gray-800 font-poppins min-h-[calc(100vh-180px)] flex">
                <section className="min-h-[calc(100vh-180px)] flex flex-col items-center justify-center flex-none w-[calc(600px)] mx-8">
                    <div className="h-[calc(600px)] w-[calc(600px)] flex items-center">
                        <Carousel slide={false}>
                            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div className="absolute top-0 bg-gray-700 bg-opacity-75 w-full flex items-center justify-center min-h-[calc(75px)]">
                                    <h3 className="text-xl font-bold text-center">Réparation ou modification de votre bateau (délaminage, fissure, déformation, talonnage, frottement)</h3>
                                </div>
                                <img src="presentation/prestation-naval-1-1.jpeg" alt="" />
                            </div>
                            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div className="absolute top-0 bg-gray-700 bg-opacity-75 w-full flex items-center justify-center min-h-[calc(75px)]">
                                    <h3 className="text-xl font-bold text-center">Réparation ou modification de votre bateau (délaminage, fissure, déformation, talonnage, frottement)</h3>
                                </div>
                                <img src="presentation/prestation-naval-1-2.jpeg" alt="" />
                            </div>
                            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div className="absolute top-0 bg-gray-700 bg-opacity-75 w-full flex items-center justify-center min-h-[calc(75px)]">
                                    <h3 className="text-xl font-bold text-center">Polissage de votre coque : Nous effectuons un polissage de votre coque afin de redonner le brillant d’origine a votre Gel-Coat</h3>
                                </div>
                                <img src="presentation/prestation-naval-2-1.jpeg" alt="" />
                            </div>
                            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div className="absolute top-0 bg-gray-700 bg-opacity-75 w-full flex items-center justify-center min-h-[calc(75px)]">
                                    <h3 className="text-xl font-bold text-center">Polissage de votre coque : Nous effectuons un polissage de votre coque afin de redonner le brillant d’origine a votre Gel-Coat</h3>
                                </div>
                                <img src="presentation/prestation-naval-2-2.jpeg" alt="" />
                            </div>
                            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div className="absolute top-0 bg-gray-700 bg-opacity-75 w-full flex items-center justify-center  min-h-[calc(75px)]">
                                    <h3 className="text-xl font-bold text-center">Carénage antifouling : matrice dure / semi–érodable / érodable</h3>
                                </div>
                                <img src="presentation/prestation-naval-3-1.jpeg" alt="" />
                            </div>
                            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div className="absolute top-0 bg-gray-700 bg-opacity-75 w-full flex items-center justify-center  min-h-[calc(75px)]">
                                    <h3 className="text-xl font-bold text-center">Carénage antifouling : matrice dure / semi–érodable / érodable</h3>
                                </div>
                                <img src="presentation/prestation-naval-3-2.jpeg" alt="" />
                            </div>
                        </Carousel>
                    </div>
                </section>
                <section className="min-h-[calc(100vh-180px)] flex flex-col items-center justify-center flex-1 p-8">
                    <p className="text-justify text-lg max-w-[calc(1000px)]">L’entreprise R2S Composites basée à La Seyne sur Mer (83) est spécialisée dans les réparations composites ainsi que l’entretien de votre bateau grâce a une équipe de professionnels à votre service, nos professionnels vous garantissent des prestations sur-mesure, adaptées à vos besoins ainsi qu’aux caractéristiques de votre bateau.</p>
                </section>

            </main>
        </>
    );
}