import { Carousel } from "flowbite-react"
import Header from "../../composants/Header"
import CustomFlowbiteReact from "../../CustomFlowbiteReact"
import { Helmet } from "react-helmet";

export default function Naval() {
    const navalServices = [
        {
            id: 1,
            title: "Polissage de votre coque : Nous effectuons un polissage de votre coque afin de redonner le brillant d'origine a votre Gel-Coat",
            images: ["/naval/presentation/prestation-naval-2-1.jpeg", "/naval/presentation/prestation-naval-2-2.jpeg"]
        },
        {
            id: 2,
            title: "Réparation ou modification de votre bateau (délaminage, fissure, déformation, talonnage, frottement)",
            images: ["/naval/presentation/prestation-naval-1-1.jpeg", "/naval/presentation/prestation-naval-1-2.jpeg"]
        },
        {
            id: 3,
            title: "Carénage antifouling : matrice dure / semi–érodable / érodable",
            images: ["/naval/presentation/prestation-naval-3-1.jpeg", "/naval/presentation/prestation-naval-3-2.jpeg"]
        }
    ];
    const NavalServiceItem = ({ title, imageSrc }) => (
        <>
            <h3 className="[text-shadow:_2px_2px_rgb(0_0_0_/40%)]">
                {title}
            </h3>
            <div className="flex flex-col h-full items-center justify-center">

                <img src={imageSrc} alt={title} />
            </div>
        </>
    );
    return (
        <>
            <Helmet>
                <title>R2S Naval</title>
                <meta
                    name="description"
                    content="R2S Naval description here"
                />
                <meta
                    name="keywords"
                    content="Industrie, OtherKeyWord"
                />
            </Helmet>
            <Header menuTitle="R2S Naval - Présentation" />
            <main className="flex flex-col lg:flex-row justify-center items-center min-h-[calc(100vh-185px)]">
                <section className="flex flex-col items-center justify-center flex-1 p-4 lg:p-8">
                    <p className="text-justify max-w-[calc(1000px)]">L’entreprise R2S Composites basée à La Seyne sur Mer (83) est spécialisée dans les réparations composites ainsi que l’entretien de votre bateau grâce a une équipe de professionnels à votre service, nos professionnels vous garantissent des prestations sur-mesure, adaptées à vos besoins ainsi qu’aux caractéristiques de votre bateau.</p>
                </section>
                <section className="flex flex-col items-center justify-center h-[calc(400px)] w-[calc(400px)] lg:h-[calc(600px)] lg:w-[calc(600px)] lg:mx-8">
                    <Carousel theme={CustomFlowbiteReact.galeryCustom} slide={false}>
                        {navalServices.flatMap(service =>
                            service.images.map((image, index) => (
                                <NavalServiceItem key={`${service.title}-${index}`} imageSrc={image} title={service.title} />
                            ))
                        )}
                    </Carousel>
                </section>
            </main>
        </>
    );
}