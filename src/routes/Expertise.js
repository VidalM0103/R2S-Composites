export default function Expertise() {
    return (
        <>
            <header className="bg-yellow-300 text-white p-6 mt-24 font-poppins">
                <h1 className="text-3xl font-bold">R2S Expertise Maritime - Présentation</h1>
            </header>

            <main className="text-white h-[calc(100vh-180px)] font-poppins">
                <section className="bg-gray-800 p-6 rounded-lg shadow-lg grid grid-cols-3 h-[calc(100vh-180px)]">
                    <div className="flex flex-col gap-4 items-center justify-evenly col-span-1">
                        <div >
                            <img src={process.env.PUBLIC_URL + "/expertise-bateau-sonde.jpeg"} alt="" className="rounded-lg shadow-lg max-h-[350px]" />
                        </div>
                        <div className="flex items-center justify-center col-span-1">
                            <img src={process.env.PUBLIC_URL + "/expertise-bateau-reunion.jpeg"} alt="" className="rounded-lg shadow-lg max-h-[350px]" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-evenly items-start p-4 col-span-2">
                        <section>
                            <h3 className="text-2xl font-bold text-yellow-300 mb-2">Expertise de pré-Transactionnelle</h3>
                            <p className="mb-4">L’expertise avant achat donne lieu à la rédaction d’un rapport basé sur les observations
                                réalisées sur le bateau. L’état des éléments constitutifs du bateau est évalué, les désordres décelés
                                sont répertoriés et une liste de recommandations est établie. La valeur vénale et la valeur d’assurance
                                du navire sont estimées.</p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-yellow-300 mb-2">Expertise de sinistre</h3>
                            <p className="mb-4">Cette expertise donne lieu à la rédaction d’un rapport basé sur les observations réalisées
                                sur le bateau. L’état des éléments sinistrés est évalué, les désordres décelés sont répertoriés et une
                                liste de spécifications des travaux à effectuer est établie et chiffrée. Cette expertise peut être
                                l’objet d’une contre – expertise.</p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-yellow-300  mb-2">Expertise de pré-Assurance</h3>
                            <p className="mb-4">Cette expertise donne lieu à la rédaction d’un rapport basé sur les observations réalisées
                                sur le bateau. La valeur d’assurance du navire est estimée.</p>
                        </section>
                        <section>
                            <h3 className="text-2xl font-bold text-yellow-300 mb-2">Suivi de chantier</h3>
                            <p className="mb-4">Cette expertise donne lieu au suivi du chantier et à la rédaction d’un rapport basé sur les
                                observations réalisées.</p>
                        </section>
                        <section>
                            <h3 className="text-2xl font-bold text-yellow-300 mb-2">Bilan osmotique (plan de sonde cardinale)</h3>
                            <p>Cette expertise permettra de contrôler l’humidité de la matrice, matérialisant éventuellement un phénomène
                                osmotique.</p>
                        </section>
                    </div>
                </section>
            </main>
        </>
    );
}