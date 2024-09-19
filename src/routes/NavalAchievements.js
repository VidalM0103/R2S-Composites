import { Carousel } from "flowbite-react"

export default function Achievements() {
    return (
        <>
            <header className="bg-yellow-300 text-white p-6 mt-24 font-poppins">
                <h1 className="text-3xl font-bold [text-shadow:_3px_3px_rgb(0_0_0_/40%)]">R2S Naval - Réalisations</h1>
            </header>
            <main className="text-white bg-gray-800 font-poppins min-h-[calc(100vh-180px)] flex items-center justify-center">
                <section className="h-[calc(100vh-180px)] w-full">
                    <Carousel slide={false}>
                        <div className="flex flex-col justify-between">
                            <h2 className="text-white block text-center pb-8">Chantier 1</h2>
                            <div className="flex flex-row justify-between items-center px-[calc(72px)]">
                                <img className="max-w-[calc(33%)]" src="chantier-1-1.png" alt="" />
                                <img className="max-w-[calc(33%)]" src="chantier-1-2.png" alt="" />
                                <img className="max-w-[calc(33%)]" src="chantier-1-3.png" alt="" />
                            </div>
                        </div>
                        <div className="flex flex-row justify-around items-center px-[calc(72px)]">
                            <img className="max-w-[calc(33%)]" src="chantier-2-1.png" alt="" />
                            <img className="max-w-[calc(33%)]" src="chantier-2-2.png" alt="" />
                        </div>
                        <div className="flex flex-row justify-around items-center px-[calc(72px)]">
                            <img className="max-w-[calc(33%)]" src="chantier-3-1.png" alt="" />
                            <img className="max-w-[calc(33%)]" src="chantier-3-2.png" alt="" />
                        </div>
                        <div className="flex flex-row justify-around items-center px-[calc(72px)]">
                            <img className="max-w-[calc(33%)]" src="chantier-4-1.png" alt="" />
                            <img className="max-w-[calc(33%)]" src="chantier-4-2.png" alt="" />
                        </div>
                        <div className="flex flex-row justify-between items-center px-[calc(72px)]">
                            <img className="max-w-[calc(33%)]" src="chantier-5-1.png" alt="" />
                            <img className="max-w-[calc(33%)]" src="chantier-5-2.png" alt="" />
                            <img className="max-w-[calc(33%)]" src="chantier-5-3.png" alt="" />
                        </div>
                        <div className="flex flex-row justify-between items-center px-[calc(72px)]">
                            <img className="max-w-[calc(33%)]" src="chantier-6-1.png" alt="" />
                            <img className="max-w-[calc(33%)]" src="chantier-6-2.png" alt="" />
                            <img className="max-w-[calc(33%)]" src="chantier-6-3.png" alt="" />
                        </div>
                        <div className="flex flex-row justify-around items-center px-[calc(72px)]">
                            <img className="max-w-[calc(33%)]" src="chantier-7-1.png" alt="" />
                            <img className="max-w-[calc(33%)]" src="chantier-7-2.png" alt="" />

                            {/** 
                                    <img className="max-w-[calc(33%)]" src="chantier-7-3.png" alt="" />
                                */}
                            <img className="max-w-[calc(33%)]" src="chantier-7-4.png" alt="" />
                        </div>
                        <div className="flex flex-row justify-between items-center px-[calc(72px)]">
                            <img className="max-w-[calc(33%)]" src="chantier-8-1.png" alt="" />
                            <img className="max-w-[calc(33%)]" src="chantier-8-2.png" alt="" />
                            <img className="max-w-[calc(33%)]" src="chantier-8-3.png" alt="" />
                        </div>
                        <div className="flex flex-row justify-between items-center px-[calc(72px)]">
                            <img className="max-w-[calc(33%)]" src="chantier-9-1.png" alt="" />
                            <img className="max-w-[calc(33%)]" src="chantier-9-2.png" alt="" />
                            <img className="max-w-[calc(33%)]" src="chantier-9-3.png" alt="" />
                        </div>
                        <div className="flex flex-row justify-around items-center px-[calc(72px)]">
                            <img className="max-w-[calc(33%)]" src="chantier-10-1.png" alt="" />
                            <img className="max-w-[calc(33%)]" src="chantier-10-2.png" alt="" />
                        </div>
                        <div className="flex flex-row justify-between items-center px-[calc(72px)]">
                            <img className="max-w-[calc(33%)]" src="chantier-11-1.png" alt="" />
                            <img className="max-w-[calc(33%)]" src="chantier-11-2.png" alt="" />
                            {/** 
                                    <img className="max-w-[calc(33%)]" src="chantier-11-3.png" alt="" />
                                */}
                            <img className="max-w-[calc(33%)]" src="chantier-11-4.png" alt="" />
                        </div>
                        <div className="flex flex-row justify-around items-center px-[calc(72px)]">
                            <img className="max-w-[calc(33%)]" src="chantier-12-1.png" alt="" />
                            <img className="max-w-[calc(33%)]" src="chantier-12-2.png" alt="" />
                        </div>
                    </Carousel>
                </section>
            </main >
        </>
    );
}