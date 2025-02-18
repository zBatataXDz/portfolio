export default function Header() {
    return (
        <header>
            <div id="menu">
                <div id="name">
                    <p>
                        Luiz
                        <span style={{ color: 'rgb(53, 13, 165)' }}>Guilherme</span>
                    </p>
                </div>
                <div id="button">   
                    {/* <span> <a href="#section1">Inicio</a> </span>| */}
                    <span> <a href="#section3">Sobre</a> </span>|
                    <span> <a href="#section4">Experiência</a> </span>|
                    <span> <a href="#section5">Contato</a> </span>
                </div>
   
            </div>
        </header>
    )
}