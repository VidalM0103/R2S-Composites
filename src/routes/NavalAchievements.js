import { Carousel } from "flowbite-react"
import { useState, useEffect } from "react"
import CustomFlowbiteReact from "../CustomFlowbiteReact.js"

export default function NavalAchievements() {
    const customForm = CustomFlowbiteReact.customForm;
    console.log("naval");

    useEffect(() => {
        console.log("useEffect");
        let id = 0;
        const buttonPrev = document.getElementsByClassName('leftControl');
        const buttonNext = document.getElementsByClassName('rightControl');
        const carrousel = document.getElementById('main');
        const divImg = document.getElementsByClassName('item-photo');

        if (window.screen.width <= 1024) {
            console.log("mobile");
            buttonNext[0].addEventListener("click", (e) => {
                let height = 0;

                if (id < divImg.length - 1)
                    id = id + 1;
                else
                    id = 0;

                for (let img of divImg[id].children) {
                    height = height + img.height;
                }
                carrousel.setAttribute("style", "height:" + height + "px");
                console.log(height, id);
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
            console.log("computer");

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
                <h1 className="text-3xl font-bold [text-shadow:_3px_3px_rgb(0_0_0_/40%)]">R2S Naval - Réalisations</h1>
            </header>
            <main id="main" className="text-white bg-gray-800 font-poppins h-[calc(1800px)] lg:!h-[calc(100vh-180px)] flex items-center justify-center w-full">
                <Carousel theme={customForm.galeryCustom} slide={false}>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <img className="lg:max-w-[calc(33%)]" src="chantier-1-1.png" alt="" />
                        <img className="lg:max-w-[calc(33%)]" src="chantier-1-2.png" alt="" />
                        <img className="lg:max-w-[calc(33%)]" src="chantier-1-3.png" alt="" />
                    </div>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <img className="lg:max-w-[calc(50%)]" src="chantier-2-1.png" alt="" />
                        <img className="lg:max-w-[calc(50%)]" src="chantier-2-2.png" alt="" />
                    </div>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <img className="lg:max-w-[calc(50%)]" src="chantier-3-1.png" alt="" />
                        <img className="lg:max-w-[calc(50%)]" src="chantier-3-2.png" alt="" />
                    </div>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <img className="lg:max-w-[calc(50%)]" src="chantier-4-1.png" alt="" />
                        <img className="lg:max-w-[calc(50%)]" src="chantier-4-2.png" alt="" />
                    </div>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <img className="lg:max-w-[calc(33%)]" src="chantier-5-1.png" alt="" />
                        <img className="lg:max-w-[calc(33%)]" src="chantier-5-2.png" alt="" />
                        <img className="lg:max-w-[calc(33%)]" src="chantier-5-3.png" alt="" />
                    </div>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <img className="lg:max-w-[calc(33%)]" src="chantier-6-1.png" alt="" />
                        <img className="lg:max-w-[calc(33%)]" src="chantier-6-2.png" alt="" />
                        <img className="lg:max-w-[calc(33%)]" src="chantier-6-3.png" alt="" />
                    </div>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <img className="lg:max-w-[calc(33%)]" src="chantier-7-1.png" alt="" />
                        <img className="lg:max-w-[calc(33%)]" src="chantier-7-2.png" alt="" />

                        {/** 
                                    <img className="max-w-[calc(33%)]" src="chantier-7-3.png" alt="" />
                                */}
                        <img className="lg:max-w-[calc(33%)]" src="chantier-7-4.png" alt="" />
                    </div>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <img className="lg:max-w-[calc(33%)]" src="chantier-8-1.png" alt="" />
                        <img className="lg:max-w-[calc(33%)]" src="chantier-8-2.png" alt="" />
                        <img className="lg:max-w-[calc(33%)]" src="chantier-8-3.png" alt="" />
                    </div>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <img className="lg:max-w-[calc(33%)]" src="chantier-9-1.png" alt="" />
                        <img className="lg:max-w-[calc(33%)]" src="chantier-9-2.png" alt="" />
                        <img className="lg:max-w-[calc(33%)]" src="chantier-9-3.png" alt="" />
                    </div>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <img className="lg:max-w-[calc(50%)]" src="chantier-10-1.png" alt="" />
                        <img className="lg:max-w-[calc(50%)]" src="chantier-10-2.png" alt="" />
                    </div>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <img className="lg:max-w-[calc(33%)]" src="chantier-11-1.png" alt="" />
                        <img className="lg:max-w-[calc(33%)]" src="chantier-11-2.png" alt="" />
                        {/** 
                                    <img className="max-w-[calc(33%)]" src="chantier-11-3.png" alt="" />
                                */}
                        <img className="lg:max-w-[calc(33%)]" src="chantier-11-4.png" alt="" />
                    </div>
                    <div className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                        <img className="lg:max-w-[calc(50%)]" src="chantier-12-1.png" alt="" />
                        <img className="lg:max-w-[calc(50%)]" src="chantier-12-2.png" alt="" />
                    </div>
                </Carousel>
            </main >
        </>
    );
}