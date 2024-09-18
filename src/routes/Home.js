export default function Home() {
    return (
        <>
            <header className="font-poppins flex flex-col items-center justify-between text-yellow-300 bg-cover bg-center min-h-[calc(100vh-96px)]  gap-6 mt-[calc(96px)]" style={{ fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./landingPage/harbor.jpg')" }}>
                <div className="flex flex-col items-center justify-center my-16">
                    <h1 className="lg:text-7xl">R2S COMPOSITES</h1>
                    <p className="text-xl lg:text-5xl text-center">Spécialiste dans les matériaux composites</p>
                </div>
                <div className="flex my-16">
                    <h2 className="text-xl lg:text-4xl text-center font-semibold text-white">Découvrir nos différents services &nbsp;</h2>
                    <svg className="animate-bounce" width="40px" height="40px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z" /></svg>
                </div>
            </header>
            <main className="text-white font-poppins">
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6 m-2 lg:m-6 text-base lg:text-lg">
                    <section className="lg:bg-gray-700 p-2 lg:p-8 rounded-lg bg-opacity-75 flex flex-col justify-center">
                        <h3 className="text-xl lg:text-2xl mb-4 text-justify font-normal"><b>R2S Expertise</b> maritime sera en mesure de répondre à tout type d’expertise sur votre bateau</h3>
                        <br />
                        <ul className="list-disc list-inside ml-2 lg:ml-10">
                            <li>Expertise de pré-Transactionnelle</li>
                            <li>Expertise de pré-Assurance</li>
                            <li>Expertise de sinistre</li>
                            <li>Suivi de chantier</li>
                            <li>Bilan osmotique (plan de sonde cardinale)</li>
                        </ul>
                    </section>
                    <hr className="text-white lg:hidden" />
                    <section className="lg:bg-gray-700 p-2 lg:p-8 rounded-lg bg-opacity-75 flex flex-col justify-center">
                        <h3 className="text-xl lg:text-2xl mb-4 text-justify font-normal"><b>R2S Naval</b> sera en mesure d’effectuer tout type de réparations composites ainsi que l’entretien de votre bateau grâce a une équipe de professionnels à votre service</h3>
                        <br />
                        <ul className="list-disc list-inside ml-2 lg:ml-10">
                            <li>Réparation ou modification de votre bateau. (délaminage, fissure, déformation, talonnage, frottement)</li>
                            <li>Polissage de votre coque.</li>
                            <li>Carénage antifouling.</li>
                        </ul>
                    </section>
                    <hr className="text-white lg:hidden" />

                    <section className="lg:bg-gray-700 p-2 lg:p-8 rounded-lg bg-opacity-75 flex flex-col justify-center">
                        <h3 className="text-xl lg:text-2xl mb-4 text-justify font-normal"><b>R2S Piscine</b> est spécialisée dans la restauration de piscines en polyester. Une piscine coque ou une piscine en béton stratifié (fibre de verre + Gel-Coat) nécessite une réfection Gel-Coat tout les dix ans afin d’éviter un phénomène osmotique</h3>
                        <p>Dans quel cas ma piscine nécessite une réfection Gel-Coat ?</p>
                        <ul className="list-disc list-inside ml-2 lg:ml-10">
                            <li>Votre piscine a plus de dix ans.</li>
                            <li>Votre Gel-Coat commence a fariner.</li>
                            <li>Vous commencez à voir des petites bulles se former.</li>
                            <li>Vous souhaitez changer la couleur de votre piscine.</li>
                        </ul>
                    </section>
                    <hr className="text-white lg:hidden" />
                    <section className="lg:bg-gray-700 p-2 lg:p-8 rounded-lg bg-opacity-75 flex flex-col justify-center">
                        <h3 className="text-xl lg:text-2xl mb-4 text-justify font-normal"><b>R2S Industrie</b> est spécialisée dans les réparations composites ainsi que divers projets grâce a une équipe de professionnels à votre service, nos professionnels vous garantissent des prestations sur-mesure, adaptées à vos besoins</h3>
                        <br />
                        <ul className="list-disc list-inside ml-2 lg:ml-10">
                            <li>Application revêtement Epoxy sur pièces métallique.</li>
                            <li>Application revêtement résine alimentaire dans tuyauterie acier.</li>
                            <li>Création de zones étanche en usine.</li>
                            <li>Imperméabilisation de salles d’eau en maison de retraite.</li>
                            <li>Création structures en polyester.</li>
                            <li>Fabrication divers pièces.</li>
                        </ul>
                    </section>
                </section>
            </main >
        </>
    );
}