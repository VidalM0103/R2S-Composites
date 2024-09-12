export default function Piscine() {
    return (
        <>
            <header className="bg-yellow-300 text-white p-6 mt-24 font-poppins">
                <h1 className="text-3xl font-bold [text-shadow:_3px_3px_rgb(0_0_0_/40%)]">R2S Piscine - Présentation</h1>
            </header>
            <main className="text-white bg-gray-800 min-h-[calc(100vh-180px)] font-poppins flex">
                <section className="flex justify-center items-center flex-none w-[calc(450px)] m-8">
                    <img className="rounded-lg shadow-lg" src="projet-3-3.png" alt="" />
                </section>
                <section className="flex flex-col justify-center  flex-1 m-8 text-white text-lg">
                    <p class="  mb-6">
                        R2S COMPOSITES est spécialisée dans la restauration de piscines en polyester. Une piscine coque ou une piscine en béton stratifié ( fibre de verre + Gel-Coat ) nécessite une réfection Gel-Coat tout les dix ans afin d’éviter un phénomène osmotique. Ce délais peut varier en fonction de la qualité du Gel-Coat ainsi que son entretien.
                    </p>
                    <h2>Dans quel cas ma piscine nécessite une réfection Gel-Coat ?</h2>
                    <ul className="p-8">
                        <li>
                            Votre piscine a plus de dix ans
                        </li>
                        <li>
                            Votre Gel-Coat commence a fariner
                        </li>
                        <li>
                            Vous commencez à voir des petites bulles se former
                        </li>
                        <li>
                            Vous souhaitez changer la couleur de votre piscine
                        </li>
                    </ul>
                    {"\n"}{"\n"}
                    <p>
                        <span className="text-red-500">Attention :</span> Si votre piscine est déjà osmosé ( présence importante de petites bulles ) il est déjà trop tard, votre piscine va nécessiter une stratification complète.
                    </p>
                    <br />
                    <p>
                        <b>Qu’est ce que l’osmose ?</b>

                        L’osmose est un phénomène chimique et mécanique qui peut altérer les piscines en polyester, en formant des cloques. En plus du dommage esthétique, l’osmose peut avoir un effet su l’étanchéité du bassin. Le phénomène d’osmose apparait lorsque l’eau passe à travers le Gel-Coat jusque dans les différentes couches de résines polyester. Une réaction chimique se produit entre l’eau et la résine polyester, pour former du liquide acétique. Des cloques s forment sur la coque, contenant ce liquide acétique.
                        <br /><br />
                        <b>Réfection Gel-Coat ?</b>
                        <br />
                        Afin d’éviter ce phénomène et de se retrouver avec des travaux onéreux, nous proposons une réfection complète du Gel-Coat de votre piscine.
                    </p>
                </section>

            </main>
        </>
    );
}