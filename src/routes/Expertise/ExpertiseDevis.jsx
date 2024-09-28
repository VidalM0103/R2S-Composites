import { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import {
    Label,
    Textarea,
    TextInput
} from "flowbite-react";
import CustomFlowbiteReact from "src/CustomFlowbiteReact";
import Header from "src/composants/Header";
import { Helmet } from "react-helmet";


export default function ExpertiseDevis() {
    const [result, setResult] = useState("");
    const [valueMeterShip, setValueMeterShip] = useState([0, 4]);
    const customForm = CustomFlowbiteReact.customForm;

    const formFields = [
        { id: 'name', label: 'Nom', type: 'text', required: true },
        { id: 'firstname', label: 'Prénom', type: 'text' },
        { id: 'email', label: 'Email', type: 'email' },
        { id: 'phone', label: 'Téléphone', type: 'tel' },
        { id: 'addr', label: 'Adresse', type: 'text' },
        { id: 'addrShip', label: 'Adresse du bateau', type: 'text', required: true },
        { id: 'shipName', label: 'Nom du bateau', type: 'text' },
        { id: 'shipBrand', label: 'Marque du bateau', type: 'text' },
        { id: 'expertise', label: 'Expertise demandée', type: 'text' },
    ];

    const renderFormField = (field) => (
        <div key={field.id}>
            <div className="block mb-2">
                <Label theme={customForm.labelCustom} htmlFor={field.id} value={field.label} />
            </div>
            <TextInput
                theme={customForm.textInputCustom}
                color="primary"
                id={field.id}
                type={field.type}
                name={field.label}
                required={field.required}
            />
        </div>
    );

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
            <Helmet>
                <title>R2S Expertise - Devis</title>
                <meta
                    name="description"
                    content="R2S Expertise description here"
                />
                <meta
                    name="keywords"
                    content="Expertise, devis, OtherKeyWord"
                />
            </Helmet>
            <Header menuTitle="R2S Expertise - Devis" />
            <main className="flex flex-col justify-around items-center min-h-[calc(100vh-184px)] p-4 lg:p-8">
                <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-4/5 lg:w-2/3" onSubmit={onSubmit}>
                    {formFields.map(renderFormField)}
                    <div className='mb-4'>
                        <div className="mb-2 block">
                            <Label theme={customForm.labelCustom} htmlFor="lenghtShip" value="Taille du bateau" />
                        </div>
                        <div className="relative w-full">
                            <input
                                type="number"
                                id="input-lenghtShip"
                                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-primary focus:border-primary"
                                value={valueMeterShip[1]}
                                onChange={handleChange}
                                min="4"
                                max="100"
                                step="1"
                                name="Taille du bateau"
                            />
                        </div>
                        <div className="relative">
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
                            <span className="text-sm text-gray-900 absolute start-10 bottom-5">mètres</span>
                            <span className="text-sm text-gray-400 absolute start-0 -bottom-6">4 mètres</span>
                            <span className="text-sm text-gray-400 absolute end-0 -bottom-6">100 mètres</span>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="block mb-2">
                            <Label theme={customForm.labelCustom} htmlFor="message" value="Message" />
                        </div>
                        <Textarea theme={customForm.textAreaInputCustom} color="primary" id="message" name="Message" rows={4} />
                    </div>
                    <div className="flex flex-col items-center lg:col-span-2 text-center p-4">
                        <button type="submit" className="w-60 btn-primary">Demander un devis</button>
                        <span className="text-white mt-2">{result}</span>
                    </div>
                </form>

            </main>
        </>
    );
}