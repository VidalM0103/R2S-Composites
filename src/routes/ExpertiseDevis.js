import { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import {
    Label,
    Textarea,
    TextInput,
} from "flowbite-react";


export default function ExpertiseDevis() {
    const [result, setResult] = useState("");
    const [valueMeterShip, setValueMeterShip] = useState([0, 4]);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Envoi du devis en cours....");
        const forlgata = new FormData(event.target);

        forlgata.append("access_key", "75b8bbf1-eec3-40e9-85fa-3fc8b53aead9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: forlgata
        });

        const data = await response.json();

        if (data.success) {
            setResult("Votre devis a était transmis avec succès.");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    function handleChange(event) {
        setValueMeterShip([4, parseInt(event.target.value)]);
    }

    return (
        <>
            <header className="bg-yellow-300 text-white p-6 mt-24 font-poppins">
                <h1 className="text-3xl font-bold">R2S Expertise - Devis</h1>
            </header>
            <section className="font-poppins min-h-[calc(100vh-180px)] w-full bg-slate-800 flex justify-around items-center" id="contact">
                <div className="p-5 lg:px-20 w-2/3" id="form">
                    <form id="contactForm" onSubmit={onSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-2 block">
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="name" value="Nom" />
                                </div>
                                <TextInput id="name" type="text" required />
                            </div>
                            <div className="mb-2 block">
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="firstname" value="Prénom" />
                                </div>
                                <TextInput id="firstname" type="text" />
                            </div>
                            <div className="mb-2 block">
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="email" value="Email" />
                                </div>
                                <div />
                                <TextInput id="email" type="email" />
                            </div>
                            <div className="mb-2 block">
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="phone" value="Téléphone" />
                                </div>
                                <TextInput id="phone" type="tel" />
                            </div>
                            <div className="mb-2 block">
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="adresse" value="Adresse" />
                                </div>
                                <TextInput id="addr" type="text" />
                            </div>
                            <div className="mb-2 block">
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="addrShip" value="Adresse du bateau" />
                                </div>
                                <TextInput id="addrShip" type="text" required />
                            </div>
                            <div className="mb-2 block">
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="shipName" value="Nom du bateau" />
                                </div>
                                <div />
                                <TextInput id="shipName" type="text" />
                            </div>
                            <div className="mb-2 block">
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="shipBrand" value="Marque du bateau" />
                                </div>
                                <div />
                                <TextInput id="shipBrand" type="text" />
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="lenghtShip" value="Taille du bateau" />
                                </div>
                                <div class="relative w-full">
                                    <input type="number" id="input-lenghtShip" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" value={valueMeterShip[1]} onChange={handleChange} min="4" max="100" step="1" />
                                </div>
                                <div class="relative">
                                    <RangeSlider
                                        className="single-thumb"
                                        min={4}
                                        step={1}
                                        defaultValue={[4, valueMeterShip[1]]}
                                        value={[4, valueMeterShip[1]]}
                                        thumbsDisabled={[true, false]}
                                        rangeSlideDisabled={true}
                                        onInput={setValueMeterShip}
                                    />
                                    <span class="text-sm text-gray-900 dark:text-gray-400 absolute start-10 bottom-5">mètres</span>
                                    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">4 mètres</span>
                                    <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">100 mètres</span>
                                </div>
                            </div>
                            <div className="mb-2 block">
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="expertise" value="Expertise demandée" />
                                </div>
                                <div />
                                <TextInput id="expertise" type="text" />
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4 col-span-2">
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="message" value="Message" />
                                </div>
                                <Textarea id="message" className='min-h-28' />
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="w-60 btn-primary">Demander un devis</button>
                            <span className="text-white">{result}</span>
                        </div>
                    </form >
                </div >
            </section >
        </>
    );
}