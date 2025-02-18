import React from 'react';

export default function Main() {

    const openInstagram = () => {window.open('https://www.instagram.com/batataxd001/', '_blank');};
    const openDiscord= () => {window.open('https://discord.gg/CSUDMwttHx', '_blank');};
    const openGitHub= () => {window.open('https://github.com/zbatataxdz/', '_blank');};

    return (
        <main id="main">
            <section id="section1">
                <div className='imagem'>
                    <img className="img1" src="image/code.png" 
                        alt="codigo logico">
                    </img>
                </div>
                <div id="txt2">
                    <p className="name2">B A T A T A  <span style={{ color: 'rgb(53, 13, 165)' }}>D E V</span></p>
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
                        <p className="titulo">👋 Olá, me chamo Luiz Guilherme</p>
                        <p className="p1">FULL-STACK</p>
                        <p className="p2"> <span></span> </p>
                        <p className="p3">Desenvolvedor Full-Stack com habilidades em Javascript, React, Lua, e jQuery.</p>
                    </div>
                </div>
          
            </section>
            <section id='section2'>
                <div id='divide'>
                    <img src='image/habilities.3d6653d3.svg' alt=''></img>
                </div>
                <div id='info'>
                    <div className='abilidades'>
                        <div className='ab'>
                            <img src='image/html.svg' alt='HTML5 icon'></img>
                            <p>HTML5</p>
                        </div>
                        <div className='ab'>
                            <img src='image/css3.svg' alt='css3 icon'></img>
                            <p>CSS3</p>
                        </div>
                        <div className='ab'>
                            <img src='image/icons8-tailwind-css-192.svg' alt='TAILWIND icon'></img>
                            <p>TAILWIND CSS</p>
                        </div>
                        <div className='ab'>
                            <img src='image/js.svg' alt='js icon'></img>
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className='ab'>
                            <img src='image/lua.svg' alt='lua icon'></img>
                            <p>LUA</p>
                        </div>
                        <div className='ab'>
                            <img src='image/jquery.svg' alt='jquery icon'></img>
                            <p>JQUERY</p>
                        </div>
                        <div className='ab'>
                            <img src='image/icons8-visualizar-js.svg' alt='Vue icon'></img>
                            <p>VUE</p>
                        </div>
                        <div className='ab'>
                            <img src='image/react.svg' alt='react icon'></img>
                            <p>REACT</p>
                        </div>
                        <div className='ab'>
                            <img src='image/react.svg' alt='react icon'></img>
                            <p>REACT NATIVE</p>
                        </div>
                        <div className='ab'>
                            <img src='image/icons8-nextjs.svg' alt='Next icon'></img>
                            <p>NEXTJS</p>
                        </div>
                        <div className='ab'>
                            <img src='image/icons8-postgreesql.svg' alt='Vue icon'></img>
                            <p>POSTGRESQL</p>
                        </div>
                        <div className='ab'>
                            <img src='image/icons8-mysql.svg' alt='MYSQL icon'></img>
                            <p>MYSQL</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='section3'>
                {/* <div className='sobre_digital'> */}
                <div id='sobre'>
                    <p className='titulo_sobre'>SOBRE</p>
                    <p className='titulo_sobre2'>QUEM SOU?</p>
                    <p className='paragrafo'> 
                        Olá! Meu nome é Luiz Guilherme, mas sou mais conhecido como Batata. Tenho 21 anos e estou focado no estudo de desenvolvimento Full-Stack. Tenho experiência com projetos pessoais na plataforma FiveM, onde forneço diversas soluções para a comunidade e trabalho com interfaces interativas. Estou me preparando por conta própria para conquistar uma vaga de estágio e entrar na área de desenvolvimento Full-Stack, onde pretendo aprimorar cada vez mais meus conhecimentos e habilidades.
                    </p>
                </div>
                <div className='caixa_image_pc'>
                    <img src='image/meupc.jpg'
                        alt='imagem do meu pc'
                    ></img>
                </div>
            </section>
            <section id='section4'>
                {/* <div id='caixa_arroow'>
                    <div className='arroow'>
                        <ion-icon name="arrow-down-outline"></ion-icon>
                    </div>
                </div> */}
                <div  id='trabalhos'>
                    <div className='paragrafos4'>
                        <p className='titulo_trabalhos'>EXPERIÊNCIA</p>
                        <p className='subTitulo_trabalhos'>Trabalhos</p>
                    </div>
                    <div id='experiencia'>
                        <div className='caixa_experiencia'>
                            <div className='experiencia_fivem'>
                                <img src='image/fivem.svg'
                                    alt='logo do fivem'
                                ></img>
                                <p className='titulo_fivem'>FiveM</p>
                                <p className='paragrafo_fivem'>Trabalho com desenvolvimento de interfaces web e correções de bugs para FiveM.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='section5'>
                <div id="icons_section5">
                    <div className='caixa_icones'>
                        <div className="instagram_section5">
                            <ion-icon name="logo-instagram" onClick={openInstagram}></ion-icon>
                        </div>
                        <div className="discord_section5">
                            <ion-icon name="logo-discord" onClick={openDiscord}></ion-icon>
                        </div>
                        <div className="github_section5">
                            <ion-icon name="logo-github" onClick={openGitHub}></ion-icon>
                        </div>
                    </div>
                    <div className='section5_txt'>
                        <div className='caixa_section5_txt'> 
                            <p className='caixa_section5_p1'>Contato</p>
                            <p className='caixa_section5_p2'>CONTRATE</p>
                            <p className='caixa_section5_p3'>MEU SERVIÇO</p>
                            <p className='caixa_section5_p4'>Entre em contato utilizando os botões.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}


