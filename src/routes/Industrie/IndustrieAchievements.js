import { Carousel } from "flowbite-react"
import { useEffect, useState } from "react"
import CustomFlowbiteReact from "../../CustomFlowbiteReact.js"
import Header from "../../composants/Header.js";

export default function IndustrieAchievements() {
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
            <Header menuTitle="R2S Industrie - Réalisations" />
            <main className="flex items-center justify-center h-[calc(1200px)] min-h-[calc(100vh-180px)] lg:!h-[calc(100vh-180px)] w-full">
                <Carousel theme={customForm.galeryCustom} slide={false}>
                    {
                        [
                            ["chantier-1-1.png", "chantier-1-2.png"],
                            ["chantier-2-1.png", "chantier-2-2.png"],
                            ["chantier-3-1.png", "chantier-3-2.png"]
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col lg:flex-row justify-evenly items-center h-full lg:px-[calc(72px)]">
                                {
                                    item.map((img, indexImg) => (
                                        <img key={indexImg} className="lg:max-w-[calc(33%)]" src={img} alt="" />
                                    ))
                                }
                            </div>
                        ))
                    }
                </Carousel>
            </main>
        </>
    );
}