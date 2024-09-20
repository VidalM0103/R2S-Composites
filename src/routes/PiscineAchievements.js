import { Carousel } from "flowbite-react"
import { useState, useEffect } from "react"
import CustomFlowbiteReact from "../CustomFlowbiteReact.js"

export default function PiscineAchievements() {
    const customForm = CustomFlowbiteReact.customForm;
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        let id = 0;
        const buttonPrev = document.getElementsByClassName('leftControl');
        const buttonNext = document.getElementsByClassName('rightControl');
        const carrousel = document.getElementById('main');
        const divImg = document.getElementsByClassName('item-photo');

        if (width <= 1024) {
            buttonNext[0].addEventListener("click", (e) => {
                let height = 0;

                if (id < divImg.length - 1)
                    id = id + 1;
                else
                    id = 0;

                for (let img of divImg[id].children) {
                    if (img.localName === "img")
                        height = height + img.height;
                }
                carrousel.setAttribute("style", "height:" + height + "px");
                window.scrollTo(0, 0);
            })

            buttonPrev[0].addEventListener("click", (e) => {
                let height = 0;

                if (id > 0)
                    id = id - 1;
                else
                    id = divImg.length - 1;

                for (let img of divImg[id].children) {
                    height = height + img.height;
                }
                carrousel.setAttribute("style", "height:" + height + "px");
                window.scrollTo(0, 0);
            })
        } else {
            buttonNext[0].addEventListener("click", (e) => {
                if (id < divImg.length - 1)
                    id = id + 1;
                else
                    id = 0;
            })
            buttonPrev[0].addEventListener("click", (e) => {
                if (id < divImg.length - 1)
                    id = id + 1;
                else
                    id = 0;
            })
        }
    })

    return (
        <>
            <header className="bg-yellow-300 text-white p-6 mt-24 font-poppins">
                <h1 className="text-xl lg:text-3xl font-bold [text-shadow:_3px_3px_rgb(0_0_0_/40%)]">R2S Piscine - Projets</h1>
            </header>

            <main id="main" className="text-white bg-gray-800 font-poppins h-[calc(1800px)] min-h-[calc(100vh-180px)] lg:!h-[calc(100vh-180px)] flex items-center justify-center w-full">
                <Carousel theme={customForm.galeryCustom} slide={false}>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <h2 className="text-2xl font-bold text-white flex-none absolute top-0 bg-gray-700 bg-opacity-75 w-full text-center p-4">Mise en place du chantier, montage de l’abris de protection</h2>
                        <img className="lg:max-w-[calc(33%)]" src="projet-1-1.png" alt="" />
                        <img className="lg:max-w-[calc(33%)]" src="projet-1-2.png" alt="" />
                        <img className="lg:max-w-[calc(33%)]" src="projet-1-3.png" alt="" />
                    </div>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <h2 className="text-2xl font-bold text-white flex-none absolute top-0 bg-gray-700 bg-opacity-75 w-full text-center p-4">Avant réfection</h2>
                        <img className="lg:max-w-[calc(50%)]" src="projet-2-1.png" alt="" />
                        <img className="lg:max-w-[calc(50%)]" src="projet-2-2.png" alt="" />
                    </div>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <h2 className="text-2xl font-bold text-white flex-none absolute top-0 bg-gray-700 bg-opacity-75 w-full text-center p-4">Après réfection</h2>
                        <img className="lg:max-w-[calc(33%)]" src="projet-3-1.png" alt="" />
                        <img className="lg:max-w-[calc(33%)]" src="projet-3-2.png" alt="" />
                        <img className="lg:max-w-[calc(33%)]" src="projet-3-3.png" alt="" />
                    </div>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <h2 className="text-2xl font-bold text-white flex-none absolute top-0 bg-gray-700 bg-opacity-75 w-full text-center p-4">Piscine en eau</h2>
                        <img className="lg:max-w-[calc(50%)]" src="projet-4-1.png" alt="" />
                        <img className="lg:max-w-[calc(50%)]" src="projet-4-2.png" alt="" />
                    </div>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <h2 className="text-2xl font-bold text-white flex-none absolute top-0 bg-gray-700 bg-opacity-75 w-full text-center p-4">Avant / Après</h2>
                        <img className="lg:max-w-[calc(50%)]" src="projet-5-1.png" alt="" />
                        <img className="lg:max-w-[calc(50%)]" src="projet-5-2.png" alt="" />
                    </div>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <h2 className="text-2xl font-bold text-white flex-none absolute top-0 bg-gray-700 bg-opacity-75 w-full text-center p-4">Avant / Après</h2>
                        <img className="lg:max-w-[calc(50%)]" src="projet-6-1.png" alt="" />
                        <img className="lg:max-w-[calc(50%)]" src="projet-6-2.png" alt="" />
                    </div>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <h2 className="text-2xl font-bold text-white flex-none absolute top-0 bg-gray-700 bg-opacity-75 w-full text-center p-4">Avant / Après</h2>
                        <img className="lg:max-w-[calc(50%)]" src="projet-7-1.png" alt="" />
                        <img className="lg:max-w-[calc(50%)]" src="projet-7-2.png" alt="" />
                    </div>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <h2 className="text-2xl font-bold text-white flex-none absolute top-0 bg-gray-700 bg-opacity-75 w-full text-center p-4">Avant / Après</h2>
                        <img className="lg:max-w-[calc(50%)]" src="projet-8-1.png" alt="" />
                        <img className="lg:max-w-[calc(50%)]" src="projet-8-2.png" alt="" />
                    </div>
                </Carousel>
            </main >
        </>
    );
}