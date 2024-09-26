import Header from "../../composants/Header";
import { Helmet } from "react-helmet"

export default function Industrie() {
    const services = [
        "Application revêtement Epoxy sur pièces métalliques.",
        "Application revêtement résine alimentaire dans tuyauterie acier.",
        "Création de zones étanches en usine.",
        "Imperméabilisation de salles d'eau en maison de retraite.",
        "Création de structures en polyester.",
        "Fabrication de diverses pièces."
    ];

    return (
        <>
            <Helmet>
                <title>R2S Industrie</title>
                <meta
                    name="description"
                    content="R2S Industrie description here"
                />
                <meta
                    name="keywords"
                    content="Industrie, devis, OtherKeyWord"
                />
            </Helmet>
            <Header menuTitle="R2S Industrie - Présentation" />
            <main className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-185px)] p-4 lg:p-8 ">
                <section>
                    <p className="text-lg mb-3 lg:mb-6">
                        L’entreprise R2S Composites basée à La Seyne sur Mer (83) est spécialisée dans les réparations composites ainsi que divers projets grâce à une équipe de professionnels à votre service. Nos professionnels vous garantissent des prestations sur-mesure, adaptées à vos besoins.
                    </p>
                    <ul className="list-disc marker:text-primary ml-16 lg:ml-32">
                        {services.map((service, index) => (
                            <li key={index} className="mb-2 lg:mb-4">
                                {service}
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="flex justify-center items-center flex-none lg:w-[calc(450px)] m-8">
                    <img className="rounded-lg shadow-lg" src="/industrie/chantier-3-1.png" alt="" />
                </section>
            </main>
        </>
    );
}