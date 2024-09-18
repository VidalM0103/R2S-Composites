import React from 'react';

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Envoi en cours....");
        const forlgata = new FormData(event.target);

        forlgata.append("access_key", "75b8bbf1-eec3-40e9-85fa-3fc8b53aead9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: forlgata
        });

        const data = await response.json();

        if (data.success) {
            setResult("Votre message a était envoyé avec succès.");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <header className="bg-yellow-300 text-white p-6 mt-24 font-poppins">
                <h1 className="text-2xl lg:text-3xl font-bold [text-shadow:_3px_3px_rgb(0_0_0_/40%)]">R2S - Contact</h1>
            </header>
            <section className="font-poppins min-h-[calc(100vh-180px)] w-full bg-slate-800 flex justify-around items-center" id="contact">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-6 max-w-3xl text-center sm:text-center lg:mx-auto lg:mb-12">
                        <h2
                            className="mb-4 font-bold tracking-tight text-white text-xl sm:text-5xl">
                            Besoin d'un renseignement?
                        </h2>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <div className="grid lg:grid-cols-2">
                            <div className="h-full pr-6 flex flex-col justify-center items-center">
                                <p className="mt-3 mb-12 text-lg text-slate-400 indent-8 text-justify">
                                    Vous avez un projet en tête ou des questions sur nos services? Que vous souhaitiez discuter d'un futur projet, obtenir des informations supplémentaires, n'hésitez pas à nous contacter.
                                    Remplissez le formulaire et on vous répondra dans les plus brefs délais.<br />
                                    Merci pour votre visite, et à bientôt!
                                </p>
                                <ul className="mb-6 lg:mb-0">
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="h-6 w-6">
                                                <path
                                                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                                </path>
                                                <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                <path d="M15 3a6 6 0 0 1 6 6"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-white">Contact
                                            </h3>
                                            <p className="text-slate-400"><b>Téléphone :</b>en attente</p>
                                            <p className="text-slate-400"><b>Mail :</b>en attente</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card h-fit max-w-6xl p-5 lg:p-12" id="form">
                                <h2 className="mb-4 text-2xl font-bold text-white">Nous Contacter</h2>
                                <form id="contactForm" onSubmit={onSubmit}>
                                    <div className="mb-6">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autoComplete="given-name" placeholder="Votre nom" className="mb-2 w-full rounded-lg border border-gray-400 py-2 pl-2 pr-4 shadow-lg text-gray-600 sm:mb-0" name="name" required />
                                            </div>
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autoComplete="email" placeholder="Votre adresse mail" className="mb-2 w-full rounded-lg border border-gray-400 py-2 pl-2 pr-4 shadow-lg text-gray-600 sm:mb-0" name="email" required />
                                            </div>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="message" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="message" name="message" cols="30" rows="5" placeholder="Écrivez-moi un message..." className="mb-2 w-full rounded-lg border border-gray-400 py-2 pl-2 pr-4 shadow-lg text-gray-600 sm:mb-0" required></textarea>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="w-full btn-primary">Envoyer message</button>
                                    </div>
                                </form>
                                <span className="text-white">{result}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}