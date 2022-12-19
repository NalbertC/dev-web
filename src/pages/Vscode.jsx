import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";
import vscode from "../assets/vscode.png"

import "../styles/pages/vscode.css"

export function Vscode() {
    return (<>
        <Header />
        <MainContent>
            <Title title='VSCode IDE' />

            <SubTitle>O que é VS Code?</SubTitle>

            <p>É um editor de código fonte aberto desenvolvido pela Microsoft que oferece o suficiente na caixa para ser considerado uma IDE. Sem dúvida, ele oferece funcionalidade suficiente para capturar mais da metade do mercado – 55% dos desenvolvedores web usam Visual Studio Code diariamente.</p>
            <p>A saber, ele está disponível para Windows, Mac e Linux. É criado com Electron, ferramenta criada pelo GitHub que permite a criação de softwares Desktop com HTML, CSS e JavaScript.</p>

            <SubTitle>Uma poderosa ferramenta com diversas funcionalidades</SubTitle>
            <p>O VS Code é capaz de fazer muitas coisas que nos ajudam a trabalhar melhor.</p>
            <p>Em sua configuração padrão, o Visual Studio Code é, antes de tudo, um editor de texto. Entretanto, quando acoplado à sua biblioteca de extensão, ele se torna modular e flexível o suficiente para atender a qualquer uma de suas necessidades de desenvolvimento:</p>
            <img src={vscode} alt="" className="img" />
            Por que usar o VS Code?
            <p>Certamente é mais agradável usar uma ferramenta que atenda ao seu gosto e necessidades.</p>
            <p>As necessidades já são supridas pelo enorme número de extensões disponíveis. E o gosto também é atendido, já que o VS Code é bem customizável.</p>
            <p>Você pode alterar a aparência dele manualmente ou baixar temas na loja de extensões.</p>
            <p>Além disso, cada funcionalidade (tanto do VS Code quanto das extensões) podem ter seu comportamento alterado na tela de configurações, que é bem simples e intuitiva.</p>

            <p>Além disso, você também encontrará uma integração de alto nível com outros produtos Microsoft, mais notadamente o GitHub:</p>

            <img src="https://kinsta.com/wp-content/uploads/2021/05/code-vcs.png" className="img" alt="" />

            <SubTitle>Por que usar o VS Code?</SubTitle>
            <ul>
                <li>Ferramenta simples;</li>
                <li>Código aberto;</li>
                <li>Arquitetura bem planejada;</li>
                <li>Possibilidade de customização;</li>
                <li>Várias funcionalidades e atalhos;</li>
                <li>Rica loja de extensões;</li>
                <li>Facilidade em criar e publicar extensões (escritas em JavaScript ou TypeScript);</li>
            </ul>

            <p>Essas são algumas das razões que tornou o VS Code no editor de código mais usado e querido pelos programadores das mais diversas linguagens de programação.</p>


        </MainContent>
        <Footer />
    </>)
}