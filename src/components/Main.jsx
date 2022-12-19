
import img from "../assets/post_tribo_web.png"
import "../styles/main.css"
import { CardLinguagem } from "./CardLinguagem"
import { SubTitle, Title2 } from "./SubTitle"


import html from "../assets/html5.svg"
import css from "../assets/css3.svg"
import js from "../assets/javascript.svg"
import react from "../assets/react.svg"
import vscode from "../assets/vscode.svg"
import browsers from "../assets/browsers.png"
import cloud from "../assets/cloud.png"

import { Artigo } from "./Artigo"
import { CodigoExemplo } from "./CodigoExemplo"
import { Telefone } from "./Telefone"

export function Main() {
    return < >
        <div className="flex content">


            <img src={img} alt="" />

            <Title2 title='Tecnologias de Desenvolvimento Web' />


            <main className="flex main">

                <article className="flex linguagem">
                    <h3>Linguagens</h3>
                    <main>
                        <CardLinguagem title='Html'
                            src={html}>
                            <span className="card-content">O HTML é o componente básico da web, ele permite inserir o conteúdo e estabelecer a estrutura básica de um website.</span>
                            <div className=" card-footer">
                                <Artigo src='/html' />
                                <CodigoExemplo src='https://github.com/vndp/Trabalhos_em_HTML' />
                            </div>
                        </CardLinguagem>

                        <CardLinguagem title='Css'
                            src={css}>
                            <span className="card-content">CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. </span>
                            <div className=" card-footer">
                                <Artigo src='/css' />
                                <CodigoExemplo src='/' />
                            </div>
                        </CardLinguagem>

                        <CardLinguagem title='JavaScript'
                            src={js}>
                            <span className="card-content">JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática.</span>
                            <div className=" card-footer">
                                <Artigo src='/javascript' />
                                <CodigoExemplo src='/' />
                            </div>
                        </CardLinguagem>

                        <CardLinguagem title='React'
                            src={react}>
                            <span className="card-content">É uma biblioteca JavaScript declarativa, eficiente e flexível criada pelo Facebook em 2011 para desenvolver aplicações front-end, ou seja, interfaces de usuário (UIs).</span>
                            <div className=" card-footer">
                                <Artigo src='/react' />
                                <CodigoExemplo src='/' />
                            </div>
                        </CardLinguagem>



                    </main>
                </article>

                <article className="flex ferramentas-execucao">
                    <h3>Ferramentas de Execuxão</h3>
                    <main>
                        <CardLinguagem title='VSCode IDE'
                            src={vscode}>
                            <span className="card-content">É um editor de código fonte aberto desenvolvido pela Microsoft que oferece o suficiente na caixa para ser considerado uma IDE.</span>
                            <div className=" card-footer">
                                <Artigo src='/vscode' />
                            </div>
                        </CardLinguagem>

                        <CardLinguagem title='Navegadores Web'
                            src={browsers}>
                            <span className="card-content">Lorem ipsum dol dfghdfdf dfgdfg dfgdfg dfgdfg or sit amet consectetur adipisicing elit. Corporis consectetur facere perferendis accusamus veritatis. Quos accusantium temporibus nemo dicta.</span>
                            <div className=" card-footer">
                                <Artigo src='/navegadores' />
                            </div>
                        </CardLinguagem>

                        <CardLinguagem title='Serviços de Hospedagem'
                            src={cloud}>
                            <span className="card-content">Lorem ipsum dol dfghdfdf dfgdfg dfgdfg dfgdfg or sit amet consectetur adipisicing elit. Corporis consectetur facere perferendis accusamus veritatis. Quos accusantium temporibus nemo dicta.</span>
                            <div className=" card-footer">
                                <Artigo src='/servicos-hopedagem' />
                            </div>
                        </CardLinguagem>
                    </main>
                </article>

            </main>
            <Telefone />
        </div>
    </>
}