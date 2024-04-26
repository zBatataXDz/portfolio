import { useState } from "react";

export default function Hamburger() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div id="hamburguer_bar"> 
                <div id="container_burguer">
                    <input id="toggleChecker" type="checkbox" onClick={toggleMenu}/>
                    <label id="togglerLable" for="toggleChecker">
                        <div class="checkboxtoggler">
                            <div class="line-1"></div>
                            <div class="line-2"></div>
                            <div class="line-3"></div>
                        </div>
                    </label>
                </div>
                {menuOpen ? (
                    <div id="button_burguer">
                        <a href="#section3">Sobre</a>
                        <a href="#section4">Experiência</a>
                        <a href="#section5">Contato</a>
                    </div>
                ) : null}
            </div>
        </header>
    );
}
