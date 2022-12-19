import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { MainContent } from "../components/MainContent";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";
import imgcss from "../assets/ImgCss.png"
import imgclasses from "../assets/ImgClasses.png"
import imgid from "../assets/ImgID.png"


import "../styles/pages/css.css"

export function Css() {
    return (<>
        <Header />

        <MainContent>
            <Title title='Css'/>
            <SubTitle title='O que é CSS?'/>
            <p className="conteudo">CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site. Pense  na decoração da sua página. Utilizando o CSS é possível alterar a cor do texto e do fundo, fonte e espaçamento entre parágrafos. Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por diante.</p>
            
            <SubTitle title='Vantagens do CSS'/>
            <p className="conteudo">com o CSS você não precisa mais escrever repetidamente como os elementos individuais se parecem. Isso economiza tempo, encurta o código e diminui a chance de erros.</p>
            
            <SubTitle title='Como CSS Funciona'/>
            <p className="conteudo">O CSS é uma ferramenta muito potente que possibilita criar diversas funcionalidades ao invés de usar JavaScript ou outra linguagem mais pesada.O CSS usa uma sintaxe simples baseada em inglês com um conjunto de regras que o governam. Como mencionamos anteriormente, o HTML nunca teve a intenção de usar elementos de estilo, apenas a marcação da página.</p>
            
            <img src={imgcss}/>

            <SubTitle title='Elementos Básicos do CSS'/>
            <p>Os elementos são tags do HTML, #id e .classe.</p>

            <SubTitle title='1. Tags HTML'/>
            <p>body<br /> h1<br/> h2<br/> h3<br/> h4<br/> h5<br/> h6<br/> span<br/> p</p>
            <SubTitle title='Classes CSS'/>
            <p>Criar e usar uma classe CSS é simples. No documento CSS basta colocar .nome-da-classe-que-deseja.</p>

            <img src={imgclasses}/>
            
            <SubTitle title='Criando ID CSS'/>
            <p>O uso dos ID’s em CSS é parecido com as classes, mas as principais diferenças são que os id’s são identificados com # e só podem ser usados um id por tag html. Para adicionar um ID ao HTML, adicione como parâmetro id=””.</p>
            <img src={imgid}/>
        

        </MainContent>

        <Footer />
    </>)
}