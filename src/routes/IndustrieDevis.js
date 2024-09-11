import { useState } from 'react';
import 'react-range-slider-input/dist/style.css';
import {
    Label,
    Textarea,
    TextInput,
} from "flowbite-react";


export default function IndustrieDevis() {
    const [result, setResult] = useState("");

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

    return (
        <>
            <header className="bg-yellow-300 text-white p-6 mt-24 font-poppins">
                <h1 className="text-3xl font-bold">R2S Industrie - Devis</h1>
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
                            <div></div>
                            <div className="mb-2 block">
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="shipName" value="Nom de la société" />
                                </div>
                                <div />
                                <TextInput id="shipName" type="text" />
                            </div>
                            <div className="mb-2 block">
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="addrChantier" value="Adresse du chantier" />
                                </div>
                                <TextInput id="addrChantier" type="text" required />
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4 col-span-2">
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="message" value="Description du chantier" />
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