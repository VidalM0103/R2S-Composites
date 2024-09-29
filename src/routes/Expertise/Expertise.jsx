import Header from "src/composants/Header";
import { Helmet } from "react-helmet-async";


export default function Expertise() {
    const expertiseTypes = [
        {
            title: "Expertise de pré-Transactionnelle",
            content: "L'expertise avant achat donne lieu à la rédaction d'un rapport basé sur les observations réalisées sur le bateau. L'état des éléments constitutifs du bateau est évalué, les désordres décelés sont répertoriés et une liste de recommandations est établie. La valeur vénale et la valeur d'assurance du navire sont estimées."
        },
        {
            title: "Expertise de sinistre",
            content: "Cette expertise donne lieu à la rédaction d'un rapport basé sur les observations réalisées sur le bateau. L'état des éléments sinistrés est évalué, les désordres décelés sont répertoriés et une liste de spécifications des travaux à effectuer est établie et chiffrée. Cette expertise peut être l'objet d'une contre–expertise."
        },
        {
            title: "Expertise de pré-Assurance",
            content: "Cette expertise donne lieu à la rédaction d'un rapport basé sur les observations réalisées sur le bateau. La valeur d'assurance du navire est estimée."
        },
        {
            title: "Suivi de chantier",
            content: "Cette expertise donne lieu au suivi du chantier et à la rédaction d'un rapport basé sur les observations réalisées."
        },
        {
            title: "Bilan osmotique (plan de sonde cardinale)",
            content: "Cette expertise permettra de contrôler l'humidité de la matrice, matérialisant éventuellement un phénomène osmotique."
        }
    ];

    const ExpertiseSection = ({ title, content }) => (
        <section>
            <h2 className="text-primary mb-2">{title}</h2>
            <p className="mb-4">{content}</p>
        </section>
    );

    return (
        <>
            <Helmet>
                <title>R2S Expertise</title>
                <meta
                    name="description"
                    content="R2S Expertise description here"
                />
                <meta
                    name="keywords"
                    content="Expertise, KeyWord, OtherKeyWord"
                />
            </Helmet>
            <Header menuTitle="R2S Expertise - Présentation" />
            <main className="lg:grid lg:grid-cols-3 min-h-[calc(100vh-185px)] gap-4 p-4 lg:p-8">
                <section className="flex flex-col justify-evenly items-start col-span-2">
                    {
                        expertiseTypes.map((type, index) => (
                            <ExpertiseSection key={index} title={type.title} content={type.content} />
                        ))
                    }
                </section>
                <section className="flex flex-col gap-4 items-center justify-evenly col-span-1">
                    <img src="/expertise/expertise-bateau-sonde.jpeg" alt="" className="rounded-lg shadow-lg h-auto w-auto max-h-[calc(350px)]" />
                    <img src="/expertise/expertise-bateau-reunion.jpeg" alt="" className="rounded-lg shadow-lg h-auto w-auto max-h-[calc(300px)]" />
                </section>
            </main>
        </>
    );
}
