import { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import {
    Label,
    Textarea,
    TextInput,
    Select,
    Checkbox
} from "flowbite-react";
import CustomFlowbiteReact from "../CustomFlowbiteReact.js";


export default function ExpertisePiscine() {
    const [result, setResult] = useState("");
    const [valueMeterShip, setValueMeterShip] = useState([0, 10]);
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
            <header className="bg-yellow-300 text-white p-6 mt-24 font-poppins">
                <h1 className="text-3xl font-bold [text-shadow:_3px_3px_rgb(0_0_0_/40%)]">R2S Piscine - Devis</h1>
            </header>
            <section className="font-poppins min-h-[calc(100vh-180px)] w-full bg-slate-800 flex justify-around items-center" id="contact">
                <div className="p-5 w-2/3" id="form">
                    <form id="contactForm" onSubmit={onSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="name" value="Nom" />
                                </div>
                                <TextInput theme={customForm.textInputCustom} color="primary" id="name" type="text" name="Nom" required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="firstname" value="Prénom" />
                                </div>
                                <TextInput theme={customForm.textInputCustom} color="primary" id="firstname" type="text" name="Prénom" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="email" value="Email" />
                                </div>
                                <div />
                                <TextInput theme={customForm.textInputCustom} color="primary" id="email" type="email" name="Email" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="phone" value="Téléphone" />
                                </div>
                                <TextInput theme={customForm.textInputCustom} color="primary" id="phone" type="tel" name="Téléphone" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="adresse" value="Adresse" />
                                </div>
                                <TextInput theme={customForm.textInputCustom} color="primary" id="addr" type="text" name="Adresse" />
                            </div>
                            <div></div>
                            <div>
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="colorPool" value="Couleur souhaitée" />
                                </div>
                                <TextInput theme={customForm.textInputCustom} color="primary" id="addrShip" type="text" name="Couleur souhaitée" required />
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="lenghtPool" value="Surface à traiter en m²" />
                                </div>
                                <div class="relative w-full">
                                    <input type="number" id="input-lenghtShip" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-yellow-300 focus:border-yellow-300" value={valueMeterShip[1]} onChange={handleChange} min="10" max="500" step="1" name="Surface à traiter en m²" />
                                </div>
                                <div class="relative">
                                    <RangeSlider
                                        className="single-thumb"
                                        min={10}
                                        max={500}
                                        step={1}
                                        defaultValue={[10, valueMeterShip[1]]}
                                        value={[10, valueMeterShip[1]]}
                                        thumbsDisabled={[true, false]}
                                        rangeSlideDisabled={true}
                                        onInput={setValueMeterShip}
                                    />
                                    <span class="text-sm text-gray-900 dark:text-gray-400 absolute start-10 bottom-5">m²</span>
                                    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">10m²</span>
                                    <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">500m²</span>
                                </div>
                            </div>
                            <div className="flex max-w-md flex-col gap-4" id="checkbox">
                                <Label theme={customForm.labelCustom} className="flex">
                                    Votre piscine a-t-elle déjà eu une réfection ?
                                </Label>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="poolReflect" name="La piscine n'a jamais eu de réfection" />
                                    <Label theme={customForm.labelCustom} htmlFor="poolReflect" className="flex">
                                        Votre piscine n'a jamais eu de réfection
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="poolGelCoat" name="La piscine a déjà eu une réfection Gel-Coat" />
                                    <Label theme={customForm.labelCustom} htmlFor="poolGelCoat">Votre piscine a déjà eu une réfection Gel-Coat</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="poolPaint" name="La piscine est peinte" />
                                    <Label theme={customForm.labelCustom} htmlFor="poolPaint">Votre piscine est peinte</Label>
                                </div>
                            </div>
                            <div className="max-w-md flex flex-col items-center justify-center">
                                <div className="mb-2 block">
                                    <Label theme={customForm.labelCustom} htmlFor="osmosePool" value="Votre piscine est-elle osmosée?" />
                                </div>
                                <Select id="osmosePool" name="Votre piscine est-elle osmosée?" required>
                                    <option>Oui</option>
                                    <option>Non</option>
                                    <option>Je ne sais pas</option>
                                </Select>
                            </div>
                            <div className="col-span-2">
                                <div className="mb-2 block">
                                    <Label className="text-white" htmlFor="message" value="Autres" />
                                </div>
                                <Textarea theme={customForm.textAreaInputCustom} color="primary" id="message" className='min-h-28' name="Message" />
                            </div>
                        </div>
                        <div className="text-center mt-8 flex flex-col items-center">
                            <button type="submit" className="w-60 btn-primary">Demander un devis</button>
                            <span className="text-white">{result}</span>
                        </div>
                    </form >
                </div >
            </section >
        </>
    );
}