import Header from "../../composants/Header";

export default function Piscine() {
    const Paragraph = ({ title, children }) => (
        <>
            {title && <h2 className="text-lg">{title}</h2>}
            {children}
        </>
    );
    return (
        <>
            <Header menuTitle="R2S Piscine - Présentation" />
            <main className="flex flex-col lg:flex-row justify-center items-center min-h-[calc(100vh-185px)] p-4 lg:p-8 ">
                <section className="flex flex-col justify-center flex-1">
                    <Paragraph>
                        <p className="mb-4 lg:mb-2">
                            R2S COMPOSITES est spécialisée dans la restauration de piscines en polyester. Une piscine coque ou une piscine en béton stratifié (fibre de verre + Gel-Coat) nécessite une réfection Gel-Coat tout les dix ans afin d’éviter un phénomène osmotique. Ce délais peut varier en fonction de la qualité du Gel-Coat ainsi que son entretien.
                        </p>
                    </Paragraph>
                    <Paragraph title="Dans quel cas ma piscine nécessite une réfection Gel-Coat?">
                        <ul className="list-disc mb-2 lg:mb-4 px-8">
                            {['Votre piscine a plus de dix ans', 'Votre Gel-Coat commence a fariner', 'Vous commencez à voir des petites bulles se former', 'Vous souhaitez changer la couleur de votre piscine'].map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        <p className="mb-4 lg:mb-2">
                            <span className="text-red-500">Attention :</span> Si votre piscine est déjà osmosé (présence importante de petites bulles) il est déjà trop tard, votre piscine va nécessiter une stratification complète.
                        </p>
                    </Paragraph>
                    <Paragraph title="Qu'est ce que l'osmose ?">
                        <p className="mb-4 lg:mb-2">
                            L'osmose est un phénomène chimique et mécanique qui peut altérer les piscines en polyester, en formant des cloques. En plus du dommage esthétique, l'osmose peut avoir un effet su l'étanchéité du bassin. Le phénomène d'osmose apparait lorsque l'eau passe à travers le Gel-Coat jusque dans les différentes couches de résines polyester. Une réaction chimique se produit entre l'eau et la résine polyester, pour former du liquide acétique. Des cloques s forment sur la coque, contenant ce liquide acétique.
                        </p>
                    </Paragraph>
                    <Paragraph title="Réfection Gel-Coat ?">
                        <p className="mb-4 lg:mb-2">
                            Afin d'éviter ce phénomène et de se retrouver avec des travaux onéreux, nous proposons une réfection complète du Gel-Coat de votre piscine.
                        </p>
                    </Paragraph>
                </section>
                <section className="flex justify-center items-center m-4 lg:m-8">
                    <img className="rounded-lg shadow-lg" src="projet-3-3.png" alt="" />
                </section>
            </main>
        </>
    );
}