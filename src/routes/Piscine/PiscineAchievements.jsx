import { Carousel } from "flowbite-react"
import { useState, useEffect } from "react"
import CustomFlowbiteReact from "src/CustomFlowbiteReact"
import Header from 'src/composants/Header'
import { Helmet } from "react-helmet-async"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function PiscineAchievements() {
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
            buttonNext[0].addEventListener("click", () => {
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

            buttonPrev[0].addEventListener("click", () => {
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
            buttonNext[0].addEventListener("click", () => {
                if (id < divImg.length - 1)
                    id = id + 1;
                else
                    id = 0;
            })
            buttonPrev[0].addEventListener("click", () => {
                if (id < divImg.length - 1)
                    id = id + 1;
                else
                    id = 0;
            })
        }
    })

    return (
        <>
            <Helmet>
                <title>R2S Piscine - Projets</title>
                <meta
                    name="description"
                    content="R2S Piscine description here"
                />
                <meta
                    name="keywords"
                    content="Piscine, OtherKeyWord"
                />
            </Helmet>
            <Header menuTitle="R2S Piscine - Projets" />
            <main id="main" className="flex items-center justify-center h-[calc(1800px)] min-h-[calc(100vh-184px)] lg:!h-[calc(100vh-184px)] w-full">
                <Carousel theme={CustomFlowbiteReact.galeryCustom} slide={false}>
                    {
                        [
                            {
                                title: "Mise en place du chantier, montage de l’abris de protection",
                                path: ["/piscine/projet-1-1.png", "/piscine/projet-1-2.png", "/piscine/projet-1-3.png"]
                            },
                            {
                                title: "Avant réfection",
                                path: ["/piscine/projet-2-1.png", "/piscine/projet-2-2.png"]
                            },
                            {
                                title: "Après réfection",
                                path: ["/piscine/projet-3-1.png", "/piscine/projet-3-2.png", "/piscine/projet-3-3.png"]
                            },
                            {
                                title: "Après réfection",
                                path: ["/piscine/projet-4-1.png", "/piscine/projet-4-2.png", "/piscine/projet-4-3.png"]
                            },
                            {
                                title: "Après réfection",
                                path: ["/piscine/projet-5-1.png", "/piscine/projet-5-2.png", "/piscine/projet-5-3.png"]
                            },
                            {
                                title: "Après réfection",
                                path: ["/piscine/projet-6-1.png", "/piscine/projet-6-2.png", "/piscine/projet-6-3.png"]
                            },
                            {
                                title: "Après réfection",
                                path: ["/piscine/projet-7-1.png", "/piscine/projet-7-2.png", "/piscine/projet-7-3.png"]
                            },
                            {
                                title: "Après réfection",
                                path: ["/piscine/projet-8-1.png", "/piscine/projet-8-2.png", "/piscine/projet-8-3.png"]
                            }
                        ].map((item, index) => (
                            <div key={index} className="h-full flex flex-col lg:flex-row justify-evenly items-center lg:px-[calc(72px)]">
                                <h2 className="absolute top-0 bg-gray-700 opacity-75 w-full text-center [text-shadow:_2px_2px_rgb(0_0_0_/40%)] p-4">{item.title}</h2>
                                {
                                    (item.path.length === 3) ?
                                        item.path.map((img, index) => (
                                            <LazyLoadImage key={index} width="lg:max-w-[calc(33%)]" src={img} alt="" effect="blur" />
                                        )) :
                                        item.path.map((img, index) => (
                                            <LazyLoadImage key={index} width="lg:max-w-[calc(50%)]" src={img} alt="" effect="blur" />
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