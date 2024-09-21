import React from "react";

export default function Home() {
    const services = [
        {
            title: "R2S Expertise",
            description: "maritime sera en mesure de répondre à tout type d'expertise sur votre bateau",
            items: [
                "Expertise de pré-Transactionnelle",
                "Expertise de pré-Assurance",
                "Expertise de sinistre",
                "Suivi de chantier",
                "Bilan osmotique (plan de sonde cardinale)"
            ]
        },
        {
            title: "R2S Naval",
            description: "sera en mesure d'effectuer tout type de réparations composites ainsi que l'entretien de votre bateau grâce a une équipe de professionnels à votre service",
            items: [
                "Réparation ou modification de votre bateau (délaminage, fissure, déformation, talonnage, frottement)",
                "Polissage de votre coque",
                "Carénage antifouling"
            ]
        },
        {
            title: "R2S Piscine",
            description: "est spécialisée dans la restauration de piscines en polyester. Une piscine coque ou une piscine en béton stratifié (fibre de verre + Gel-Coat) nécessite une réfection Gel-Coat tout les dix ans afin d'éviter un phénomène osmotique",
            items: [
                "Votre piscine a plus de dix ans",
                "Votre Gel-Coat commence a fariner",
                "Vous commencez à voir des petites bulles se former",
                "Vous souhaitez changer la couleur de votre piscine"
            ]
        },
        {
            title: "R2S Industrie",
            description: "est spécialisée dans les réparations composites ainsi que divers projets grâce a une équipe de professionnels à votre service, nos professionnels vous garantissent des prestations sur-mesure, adaptées à vos besoins",
            items: [
                "Application revêtement Epoxy sur pièces métallique",
                "Application revêtement résine alimentaire dans tuyauterie acier",
                "Création de zones étanche en usine",
                "Imperméabilisation de salles d'eau en maison de retraite",
                "Création structures en polyester",
                "Fabrication divers pièces"
            ]
        }
    ];

    const ServiceSection = ({ title, description, items }) => (
        <section className="flex flex-col justify-center lg:bg-gray-700 bg-opacity-75 rounded-lg p-2 lg:p-4">
            <h3 className="text-lg mb-2 lg:mb-4 font-normal">
                <b>{title}</b> {description}
            </h3>
            <ul className="list-disc list-inside ml-2 lg:ml-10">
                {items.map((item, index) => (
                    <li key={`${title}-item-${index}`}>{item}</li>
                ))}
            </ul>
        </section>
    );

    return (
        <>
            <header className="flex flex-col items-center justify-between gap-6 min-h-[calc(100vh-96px)] bg-cover bg-center bg-hero brightness-85 font-bold [text-shadow:_3px_3px_rgb(0_0_0_/40%)] mt-[calc(96px)]">
                <div className="flex flex-col items-center justify-center my-16">
                    <h1 className="text-3xl lg:text-7xl">R2S COMPOSITES</h1>
                    <p className="text-xl lg:text-5xl text-center text-yellow-300">Spécialiste dans les matériaux composites</p>
                </div>
                <div className="flex items-center justify-center my-16">
                    <h2 className="text-center">Découvrir nos différents services &nbsp;</h2>
                    <svg className="animate-bounce" width="40px" height="40px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z" /></svg>
                </div>
            </header>
            <main className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6 m-2 lg:m-6">
                {services.map((service, index) => (
                    <React.Fragment key={`service-${index}`}>
                        <ServiceSection {...service} />
                        {index < services.length - 1 && <hr className="lg:hidden" />}
                    </React.Fragment>
                ))}
            </main>
        </>
    );
}