export default function Industrie() {
    return (
        <>
            <header className="bg-yellow-300 text-white p-6 mt-24 font-poppins">
                <h1 className="text-xl lg:text-3xl font-bold [text-shadow:_3px_3px_rgb(0_0_0_/40%)]">R2S Industrie - Présentation</h1>
            </header>
            <main className="text-white bg-gray-800 p-4 lg:p-8 min-h-[calc(100vh-180px)] font-poppins flex flex-col lg:flex-row items-center justify-center">

                <section className="flex flex-col justify-center  flex-1 lg:m-8 text-white text-lg items-center">
                    <p class="text-lg text-white mb-6">
                        L’entreprise R2S Composites basée à La Seyne sur Mer (83) est spécialisée dans les réparations composites ainsi que divers projets grâce à une équipe de professionnels à votre service. Nos professionnels vous garantissent des prestations sur-mesure, adaptées à vos besoins.
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <span class="text-yellow-300 font-bold text-xl mr-3">•</span>
                            <p class="text-white text-lg">Application revêtement Epoxy sur pièces métalliques.</p>
                        </div>
                        <div class="flex items-start">
                            <span class="text-yellow-300 font-bold text-xl mr-3">•</span>
                            <p class="text-white text-lg">Application revêtement résine alimentaire dans tuyauterie acier.</p>
                        </div>
                        <div class="flex items-start">
                            <span class="text-yellow-300 font-bold text-xl mr-3">•</span>
                            <p class="text-white text-lg">Création de zones étanches en usine.</p>
                        </div>
                        <div class="flex items-start">
                            <span class="text-yellow-300 font-bold text-xl mr-3">•</span>
                            <p class="text-white text-lg">Imperméabilisation de salles d’eau en maison de retraite.</p>
                        </div>
                        <div class="flex items-start">
                            <span class="text-yellow-300 font-bold text-xl mr-3">•</span>
                            <p class="text-white text-lg">Création de structures en polyester.</p>
                        </div>
                        <div class="flex items-start">
                            <span class="text-yellow-300 font-bold text-xl mr-3">•</span>
                            <p class="text-white text-lg">Fabrication de diverses pièces.</p>
                        </div>
                    </div>
                </section>
                <section className="flex justify-center items-center flex-none lg:w-[calc(450px)] m-8">
                    <img className="rounded-lg shadow-lg" src="chantier-3-1.png" alt="" />
                </section>
            </main>
        </>
    );
}