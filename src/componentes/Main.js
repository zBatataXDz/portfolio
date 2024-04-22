import React from 'react';

export default function Main() {

    const openInstagram = () => {window.open('https://www.instagram.com/leviidiniz/', '_blank');};
    const openDiscord= () => {window.open('https://discord.gg/CSUDMwttHx', '_blank');};
    const openGitHub= () => {window.open('https://github.com/pzglevi/', '_blank');};

    return (
        <main id="main">
            <section id="section1">
                <div className='imagem'>
                    <img className="img1" src="/image/code.png" alt="codigo logico"></img>
                </div>
                    <div id="txt2">
                        <p className="name2">L E V I  <span style={{ color: 'rgb(125, 0, 184)' }}>D E V</span></p>
                    </div>
                <div id="meunu_inicial">
                    <div id="icons">
                        <div className="instagram">
                            <ion-icon name="logo-instagram" onClick={openInstagram}></ion-icon>
                        </div>
                        <div className="discord">
                            <ion-icon name="logo-discord" onClick={openDiscord}></ion-icon>
                        </div>
                        <div className="github">
                            <ion-icon name="logo-github" onClick={openGitHub}></ion-icon>
                        </div>
                    </div>
                    <div id="txt">
                        <p className="titulo">👋 Olá, sou Levi Diniz</p>
                        <p className="p1">FULL-STACK</p>
                        <p className="p2"> <span></span> </p>
                        <p className="p3">Desenvolvedor Full-Stack com habilidades em Javascript, React, Lua, e jQuery.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
