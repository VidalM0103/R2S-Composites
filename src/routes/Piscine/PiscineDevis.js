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
import CustomFlowbiteReact from "../../CustomFlowbiteReact.js";
import Header from "../../composants/Header";


export default function ExpertisePiscine() {
    const [result, setResult] = useState("");
    const [surfaceArea, setSurfaceArea] = useState([0, 10]);
    const customForm = CustomFlowbiteReact.customForm;

    const formFields = [
        { id: 'name', label: 'Nom', type: 'text', required: true },
        { id: 'firstname', label: 'Prénom', type: 'text' },
        { id: 'email', label: 'Email', type: 'email' },
        { id: 'phone', label: 'Téléphone', type: 'tel' },
        { id: 'addr', label: 'Adresse', type: 'text' },
        { id: 'colorPool', label: 'Couleur souhaitée', type: 'text', required: true },
    ];

    const checkboxOptions = [
        { id: 'poolReflect', label: "Votre piscine n'a jamais eu de réfection" },
        { id: 'poolGelCoat', label: 'Votre piscine a déjà eu une réfection Gel-Coat' },
        { id: 'poolPaint', label: 'Votre piscine est peinte' },
    ];

    const renderFormField = (field) => (
        <div key={field.id}>
            <div className="block mb-2">
                <Label className="text-white" htmlFor={field.id} value={field.label} />
            </div>
            <TextInput
                theme={customForm.textInputCustom}
                color="primary"
                id={field.id}
                type={field.type}
                name={field.id}
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

    function handleSurfaceAreaChange(event) {
        setSurfaceArea([10, parseInt(event.target.value)]);
    }

    return (
        <>
            <Header menuTitle="R2S Piscine - Devis" />
            <main className="flex flex-col items-center justify-around min-h-[calc(100vh-184px)] w-full p-4 lg:p-8">
                <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-4/5 lg:w-2/3" onSubmit={onSubmit}>
                    {formFields.map(renderFormField)}
                    <div className="mb-3">
                        <div className="block mb-2">
                            <Label className="text-white" htmlFor="lenghtPool" value="Surface à traiter en m²" />
                        </div>
                        <div className="relative w-full">
                            <input
                                type="number"
                                id="input-surface"
                                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-primary focus:border-primary"
                                value={surfaceArea[1]}
                                onChange={handleSurfaceAreaChange}
                                min="10"
                                max="500"
                                step="1"
                                name="Surface à traiter en m²"
                            />
                        </div>
                        <div className="relative">
                            <RangeSlider
                                className="single-thumb"
                                max={500}
                                min={10}
                                step={1}
                                defaultValue={[10, surfaceArea[1]]}
                                value={[10, surfaceArea[1]]}
                                thumbsDisabled={[true, false]}
                                onInput={setSurfaceArea}
                            />
                            <span className="text-sm text-gray-900 absolute start-10 bottom-5">m²</span>
                            <span className="text-sm text-gray-400 absolute start-0 -bottom-6">10m²</span>
                            <span className="text-sm text-gray-400 absolute end-0 -bottom-6">500m²</span>
                        </div>
                    </div>
                    <div></div>
                    <div className="flex max-w-md flex-col gap-4" id="checkbox">
                        <Label theme={customForm.labelCustom} className="flex">
                            Votre piscine a-t-elle déjà eu une réfection ?
                        </Label>
                        {checkboxOptions.map((option) => (
                            <div key={option.id} className="flex items-center gap-2">
                                <Checkbox id={option.id} name={option.label} />
                                <Label theme={customForm.labelCustom} htmlFor={option.id} className="flex">
                                    {option.label}
                                </Label>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center justify-center max-w-md">
                        <div className="block mb-2">
                            <Label theme={customForm.labelCustom} htmlFor="osmosePool" value="Votre piscine est-elle osmosée?" />
                        </div>
                        <Select id="osmosePool" name="Votre piscine est-elle osmosée?" required>
                            <option>Oui</option>
                            <option>Non</option>
                            <option>Je ne sais pas</option>
                        </Select>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="block mb-2">
                            <Label className="text-white" htmlFor="message" value="Autres" />
                        </div>
                        <Textarea theme={customForm.textAreaInputCustom} color="primary" id="message" className='min-h-28' name="Message" />
                    </div>
                    <div className="flex flex-col items-center lg:col-span-2 text-center p-4">
                        <button type="submit" className="w-60 btn-primary">Demander un devis</button>
                        {result && <span className="text-white mt-2">{result}</span>}
                    </div>
                </form>
            </main>
        </>
    );
}