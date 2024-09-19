import { useState } from 'react';
import {
    Label,
    Textarea,
    TextInput
} from "flowbite-react";
import CustomFlowbiteReact from "../CustomFlowbiteReact.js";


export default function IndustrieDevis() {
    const customForm = CustomFlowbiteReact.customForm;
    const [result, setResult] = useState("");

    const formItems = [
        { id: "name", label: "Nom", type: "TextInput", subtype: "text", required: true, placeholder: "" },
        { id: "firstname", label: "Prénom", type: "TextInput", subtype: "text", required: false, placeholder: "" },
        { id: "email", label: "Email", type: "TextInput", subtype: "email", required: true, placeholder: "name@email.fr" },
        { id: "tel", label: "Téléphone", type: "TextInput", subtype: "tel", required: true, placeholder: "06.06.06.06.06" },
        { id: "addr", label: "Adresse", type: "TextInput", subtype: "text", required: false, placeholder: "" },
        { id: "nameFirm", label: "Nom de l'entreprise", type: "TextInput", subtype: "text", required: false, placeholder: "" },
        { id: "addrSite", label: "Adresse du chantier", type: "TextInput", subtype: "text", required: false, placeholder: "" },
        { id: "description", label: "Description", type: "TextArea", required: false },

    ];

    const listItems = formItems.map((item) =>
        <div className={item.type === "TextArea" && "lg:col-span-2"} key={item.label}>
            <div className="mb-2 block">
                <Label theme={customForm.labelCustom} htmlFor={item.label} value={item.label} />
            </div>
            {
                item.type === "TextInput" &&
                <TextInput theme={customForm.textInputCustom} color="primary" type={item.subtype} required={item.required} placeholder={item.placeholder} name={item.label} />
            }
            {
                item.type === "TextArea" &&
                <Textarea theme={customForm.textAreaInputCustom} color="primary" required={item.required} rows={4} name={item.label} />
            }
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

    return (
        <>
            <header className="bg-yellow-300 text-white p-6 mt-24 font-poppins">
                <h1 className="text-3xl font-bold [text-shadow:_3px_3px_rgb(0_0_0_/40%)]">R2S Industrie - Devis</h1>
            </header>
            <main className="font-poppins min-h-[calc(100vh-180px)] w-full bg-slate-800 flex flex-col justify-around items-center p-4" id="contact">
                <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-4/5 lg:w-2/3" id="contactForm" onSubmit={onSubmit}>
                    {listItems}
                </form>
                <div className="my-8 text-center flex flex-col items-center">
                    <button type="submit" className="w-60 btn-primary">Demander un devis</button>
                    <span className="text-white">{result}</span>
                </div>
            </main >
        </>
    );
}