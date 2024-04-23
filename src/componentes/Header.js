export default function Header() {
    return (
        <header>
            <div id="menu">
                <div id="name">
                    <p>
                        levi
                        <span style={{ color: 'rgb(125, 0, 184)' }}>dev</span>
                    </p>
                </div>
                <div id="button">   
                    {/* <span> <a href="#section1">Inicio</a> </span>| */}
                    <span> <a href="#section3">Sobre</a> </span>|
                    <span> <a href="#section4">Experiência</a> </span>|
                    <span> <a href="#section3">Contato</a> </span>
                </div>
   
            </div>
        </header>
    )
}