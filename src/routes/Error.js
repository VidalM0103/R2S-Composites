import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-184px)]">
            <h1 className="mb-8">404</h1>
            <p className="mb-8">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="btn-primary" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}