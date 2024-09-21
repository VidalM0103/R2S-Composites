import { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import {
    Label,
    Textarea,
    TextInput,
} from "flowbite-react";
import CustomFlowbiteReact from "../../CustomFlowbiteReact.js";


export default function NavalDevis() {
    const [result, setResult] = useState("");
    const [valueMeterShip, setValueMeterShip] = useState([0, 4]);
    const customForm = CustomFlowbiteReact.customForm;

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
            <header className="bg-yellow-300 p-6 mt-24">
                <h1 className="text-3xl font-bold [text-shadow:_3px_3px_rgb(0_0_0_/40%)]">R2S Naval - Devis</h1>
            </header>
            <main className="font-poppins min-h-[calc(100vh-180px)] w-full bg-slate-800 flex flex-col justify-around items-center p-4" id="contact">
                <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-4/5 lg:w-2/3" id="contactForm" onSubmit={onSubmit}>
                    <div>
                        <div className="mb-2 block">
                            <Label theme={customForm.labelCustom} htmlFor="name" value="Nom" />
                        </div>
                        <TextInput theme={customForm.textInputCustom} color="primary" id="name" type="text" name="Nom" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label theme={customForm.labelCustom} htmlFor="firstname" value="Prénom" />
                        </div>
                        <TextInput theme={customForm.textInputCustom} color="primary" id="firstname" type="text" name="Prénom" />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label theme={customForm.labelCustom} htmlFor="email" value="Email" />
                        </div>
                        <div />
                        <TextInput theme={customForm.textInputCustom} color="primary" id="email" type="email" name="Email" />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label theme={customForm.labelCustom} htmlFor="phone" value="Téléphone" />
                        </div>
                        <TextInput theme={customForm.textInputCustom} color="primary" id="phone" type="tel" name="Téléphone" />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label theme={customForm.labelCustom} htmlFor="adresse" value="Adresse" />
                        </div>
                        <TextInput theme={customForm.textInputCustom} color="primary" id="addr" type="text" name="Adresse" />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label theme={customForm.labelCustom} htmlFor="addrShip" value="Adresse du bateau" />
                        </div>
                        <TextInput theme={customForm.textInputCustom} color="primary" id="addrShip" type="text" name="Adresse du bateau" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label theme={customForm.labelCustom} htmlFor="shipName" value="Nom du bateau" />
                        </div>
                        <div />
                        <TextInput theme={customForm.textInputCustom} color="primary" id="shipName" type="text" name="Nom du bateau" />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label theme={customForm.labelCustom} htmlFor="shipBrand" value="Marque du bateau" />
                        </div>
                        <div />
                        <TextInput theme={customForm.textInputCustom} color="primary" id="shipBrand" type="text" name="Marque du bateau" />
                    </div>
                    <div className='mb-4'>
                        <div className="mb-2 block">
                            <Label theme={customForm.labelCustom} htmlFor="input-lenghtShip" value="Taille du bateau" />
                        </div>
                        <div class="relative w-full">
                            <input type="number" id="input-lenghtShip" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-yellow-300 focus:border-yellow-300" value={valueMeterShip[1]} onChange={handleChange} min="4" max="100" step="1" name="Taille du bateau" />
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
                    <div className="lg:col-span-2">
                        <div className="mb-2 block">
                            <Label theme={customForm.labelCustom} htmlFor="message" value="Message" />
                        </div>
                        <Textarea theme={customForm.textAreaInputCustom} color="primary" id="message" className='min-h-28' name="Message" />
                    </div>
                </form>
                <div className="mt-8 text-center flex flex-col items-center">
                    <button type="submit" className="w-60 btn-primary">Demander un devis</button>
                    <span className="text-white">{result}</span>
                </div>
            </main>
        </>
    );
}