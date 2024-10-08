import { useState } from 'react'
import {
    Label,
    Textarea,
    TextInput
} from "flowbite-react";
import CustomFlowbiteReact from "../../CustomFlowbiteReact.jsx"
import Header from "src/composants/Header"
import { Helmet } from "react-helmet-async"
import HCaptcha from '@hcaptcha/react-hcaptcha';


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
            <div className="block mb-2">
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
        const form = document.getElementById('form');
        event.preventDefault();
        setResult("Envoi du devis en cours....");
        const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

        if (!hCaptcha) {
            event.preventDefault();
            setResult("Veuillez renseigner le captcha en amont.");
            return;
        }
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
            <Helmet>
                <title>R2S Industrie - Devis</title>
                <meta
                    name="description"
                    content="R2S Industrie Devis description here"
                />
                <meta
                    name="keywords"
                    content="Industrie, Devis, OtherKeyWord"
                />
            </Helmet>
            <Header menuTitle="R2S Industrie - Devis" />
            <main className="flex flex-col justify-around items-center min-h-[calc(100vh-184px)] w-full p-4 lg:p-8" id="contact">
                <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-4/5 lg:w-2/3" id="contactForm" onSubmit={onSubmit}>
                    {listItems}
                    <div className="lg:col-span-2 flex items-center justify-center">
                        <HCaptcha
                            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                            reCaptchaCompat={false}
                        />
                    </div>
                    <div className="flex flex-col items-center lg:col-span-2 text-center p-4">
                        <button type="submit" className="w-60 btn-primary">Demander un devis</button>
                        <span className='text-white mt-2'>{result}</span>
                    </div>
                </form>
            </main >
        </>
    );
}