import Header from 'src/composants/Header'
import React from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function Contact() {
    const [result, setResult] = React.useState("");

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
            <Header menuTitle="R2S - Contact" />
            <main className="flex justify-center min-h-[calc(100vh-185px)] w-full p-8">
                <form className="flex flex-col gap-4 max-w-[calc(1000px)]" id="contactForm" onSubmit={onSubmit}>
                    <input htmlFor="name" type="text" id="name" autoComplete="given-name" placeholder="Nom & prénom" className="w-full rounded-lg border border-gray-400 shadow-lg text-gray-600" name="name" required />
                    <input htmlFor="email" type="email" id="email" autoComplete="email" placeholder="Adresse mail" className="w-full rounded-lg border border-gray-400 shadow-lg text-gray-600" name="email" required />
                    <textarea htmlFor="message" id="message" name="message" cols="30" rows="5" placeholder="Écrivez-moi un message..." className="w-full rounded-lg border border-gray-400 shadow-lg text-gray-600" required></textarea>
                    <div className="lg:col-span-2 flex items-center justify-center">
                        <HCaptcha
                            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                            reCaptchaCompat={false}
                        />
                    </div>
                    <button type="submit" className="btn-primary text-center">Envoyer message</button>
                    <span className="text-white">{result}</span>
                </form>
            </main >
        </>
    );
}