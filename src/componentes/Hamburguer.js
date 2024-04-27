import { useState } from "react";

export default function Hamburger() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        // const scrollTop = event.target.scrollTop;
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    return (
        <header>
            <div id="hamburguer_bar"> 
                <div id="container_burguer">
                    <input id="toggleChecker" type="checkbox" onClick={toggleMenu} checked={menuOpen} readOnly/>
                    <label id="togglerLable" htmlFor="toggleChecker">
                        <div className="checkboxtoggler">
                            <div className="line-1"></div>
                            <div className="line-2"></div>
                            <div className="line-3"></div>
                        </div>
                    </label>
                </div>
                {menuOpen ? (
                    <div id="button_burguer">
                        <a href="#section3" onClick={closeMenu}>Sobre</a>
                        <a href="#section4" onClick={closeMenu}>Experiência</a>
                        <a href="#section5" onClick={closeMenu}>Contato</a>
                    </div>
                ) : null}
            </div>
        </header>
    );
}
