import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";
import CustomFlowbiteReact from "../../CustomFlowbiteReact.js";
import Header from '../../composants/Header.js';

export default function NavalAchievements() {
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
            <Header menuTitle="R2S Naval - Réalisations" />
            <main id="main" className="flex items-center justify-center h-[calc(1800px)] min-h-[calc(100vh-184px)] lg:!h-[calc(100vh-184px)] w-full">
                <Carousel theme={customForm.galeryCustom} slide={false}>
                    {
                        [
                            ["/naval/realisations/chantier-1-1.png", "/naval/realisations/chantier-1-2.png", "/naval/realisations/chantier-1-3.png"],
                            ["/naval/realisations/chantier-2-1.png", "/naval/realisations/chantier-2-2.png"],
                            ["/naval/realisations/chantier-3-1.png", "/naval/realisations/chantier-3-2.png"],
                            ["/naval/realisations/chantier-4-1.png", "/naval/realisations/chantier-4-2.png"],
                            ["/naval/realisations/chantier-5-1.png", "/naval/realisations/chantier-5-2.png", "/naval/realisations/chantier-5-3.png"],
                            ["/naval/realisations/chantier-6-1.png", "/naval/realisations/chantier-6-2.png", "/naval/realisations/chantier-6-3.png"],
                            ["/naval/realisations/chantier-7-1.png", "/naval/realisations/chantier-7-2.png", "/naval/realisations/chantier-7-4.png"],
                            ["/naval/realisations/chantier-8-1.png", "/naval/realisations/chantier-8-2.png", "/naval/realisations/chantier-8-3.png"],
                            ["/naval/realisations/chantier-9-1.png", "/naval/realisations/chantier-9-2.png", "/naval/realisations/chantier-9-3.png"],
                            ["/naval/realisations/chantier-10-1.png", "/naval/realisations/chantier-10-2.png"],
                            ["/naval/realisations/chantier-11-1.png", "/naval/realisations/chantier-11-2.png", "/naval/realisations/chantier-11-4.png"],
                            ["/naval/realisations/chantier-12-1.png", "/naval/realisations/chantier-12-2.png"]
                        ].map((item, index) => (
                            <div key={index} className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                                {
                                    (item.length === 3) ?
                                        item.map((img, indexImg) => (
                                            <img key={indexImg} className="lg:max-w-[calc(33%)]" src={img} alt="" />
                                        )) :
                                        item.map((img, indexImg) => (
                                            <img key={indexImg} className="lg:max-w-[calc(50%)]" src={img} alt="" />
                                        ))
                                }
                            </div>
                        ))
                    }
                </Carousel>
            </main >
        </>
    );
}