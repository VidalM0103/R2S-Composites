const Header = ({ menuTitle }) => {
    return (
        <header className="bg-primary mt-[calc(96px)] p-6">
            <h1 className="[text-shadow:_2px_2px_rgb(0_0_0_/40%)] lg:[text-shadow:_3px_3px_rgb(0_0_0_/40%)]">{menuTitle}</h1>
        </header>
    );
}

export default Header;