import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";
import "../styles/pages/javas.css"
import javas from "../assets/javascript.svg"

import { AiOutlineHome, AiOutlineTeam } from "react-icons/ai"


export function Javasript() {
    return (

        <>
            <Header />

            <MainContent>
                <Title title='JavaScript' />
                <SubTitle>Definição de java Script</SubTitle>
                <p>JavaScript é uma linguagem de programação que permite a você implementar
                    itens complexos em páginas web — toda vez que uma página da web faz mais do
                    que simplesmente mostrar a você informação estática — mostrando conteúdo que
                    se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados,
                    etc. — você pode apostar que o JavaScript provavelmente está envolvido. É a terceira
                    camada do bolo das tecnologias padrões da web, duas das quais (HTML e CSS) nós falamos
                    com muito mais detalhes em outras partes da Área de Aprendizado.</p>

                <img src="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/cake.png" alt="" height={350} />

                <ul>
                    <li>HTML é a linguagem de marcação que nós usamos para estruturar e dar significado para o nosso conteúdo web. Por exemplo, definindo parágrafos, cabeçalhos, tabelas de conteúdo, ou inserindo imagens e vídeos na página.</li>
                    <li>CSS é uma linguagem de regras de estilo que nós usamos para aplicar estilo ao nosso conteúdo HTML. Por exemplo, definindo cores de fundo e fontes, e posicionando nosso conteúdo em múltiplas colunas.</li>
                    <li>JavaScript é uma linguagem de programação que permite a você criar conteúdo que se atualiza dinamicamente, controlar múltimídias, imagens animadas, e tudo o mais que há de intessante. Ok, não tudo, mas é maravilhoso o que você pode efetuar com algumas linhas de código JavaScript.</li>
                </ul>
                <p>As três camadas ficam muito bem uma em cima da outra. Vamos exemplificar com um simples bloco de texto. </p>

                <SubTitle title="Quem criou o JavaScript?" />

                <p>Esta inovadora linguagem foi criada no ano de 1995, como dito no início deste texto, pelo programador Brendan Eich que, na época, trabalhava para o navegador Netscape.</p>
                <p>Com o objetivo de trazer mais "vida" à uma internet até então desenhada por imagens estáticas e textos, a criação de uma linguagem de scripts acabou se tornando um grande trunfo competitivo para o Netscape.</p>
                <p>Na época, os navegadores não eram nativos nos sistemas operacionais e para ter acesso a um software era necessário comprá-lo. Com o JavaScript, o Netscape saiu à frente de seus concorrentes e se tornou o navegador mais utilizado do mercado em 1995.</p>
                <SubTitle title="Como o JavaScript funciona?" />
                <p>JavaScript, originalmente, é uma linguagem de programação client-side, ou seja, é executada do lado do usuário, mais especificamente pelo navegador utilizado por este usuário.</p>
                <p>Em outras palavras, isso significa que todas as suas ações são processadas na máquina de quem as utiliza, sem a necessidade de enviá-las a nenhum outro ambiente.</p>
                <p>Como nada é enviado a nenhum servidor externo para processamento, as respostas são imediatas.</p>
                <p>Vamos a um exemplo de aplicação de JS:</p>
                <p>Imagine que, ao fazer a compra de dois ou mais produtos em um e-commerce, você seja direcionado à página de checkout e, lá, veja um resumo dos seus itens e o valor total a ser pago por eles.</p>
                <p>O pequeno box onde é feito o cálculo do total da sua compra, e que se modifica quando um item é incluído ou excluído, ou ainda quando é ativado um cupom de desconto, pode ser desenvolvido com JavaScript.</p>

                <SubTitle title="Para que serve o JS?" />
                <p>Além das aplicações citadas acima, como elementos dinâmicos dentro de uma página simples, graças à criação de bibliotecas de terceiros, como por exemplo o Node.js, a quantidade de campos onde o JS pode ser aplicado se expandiu consideravelmente.</p>
                <p>Veremos abaixo onde esta linguagem de programação pode ser utilizada e quais são as suas contribuições possíveis em cada uma destas diferentes frentes de programação.</p>

                <h3>Desenvolvimento web</h3>
                <p>O desenvolvimento web é a primeira e mais básica utilidade para o JavaScript.</p>

                <p>Criado para rodar no antigo navegador Netscape, sua popularidade se consolidou um ano depois, quando a Microsoft passou a rodar JS em seu browser da época.</p>

                <p>Hoje, pelos seus códigos serem implantados diretamente em HTML, praticamente todos os navegadores e sistemas operacionais do mercado rodam esta tecnologia sem nenhum empecilho.</p>

                <p>Os mais famosos frameworks para a aplicação de JavaScript em desenvolvimento web são jQuery, ReactJS, Vue.JS e Angular.</p>

                <h3>Desenvolvimento mobile</h3>

                <p>Dentro do ecossistema de expansão das utilizações do JavaScript, entraram diversas bibliotecas e frameworks que permitem sua aplicação no desenvolvimento de aplicativos mobile, seja em front ou back-end.</p>
                <p>O que essas ferramentas fazem, a grosso modo, é simular o ambiente de um navegador para simular o JS ou transpilar o JavaScript para a linguagem nativa de cada modelo de dispositivo móvel para qual o aplicativo estará disponível.</p>
                <p>Com o surgimento destes frameworks a utilização não só tornou-se possível, como também incrivelmente acessível.</p>
                <p>Entre as mais populares estão a VueJS, React Native, PhoneGap, o Ionic Framework, Electron, Flutter e suas centenas de plugins.</p>
                
                <img src={javas} alt="" height={200} />

                <SubTitle title="Quais são as vantagens e desvantagens do JavaScript" />

                <h3>Vantagens</h3>
                <p>Não é à toa que JavaScript é, na maioria das vezes, a primeira linguagem de programação que um recém desenvolvedor aprende.</p>
                <p>Isso acontece porque JS é uma ótima linguagem para um primeiro contato com a programação e, por consequência, para se estudar lógica de programação.</p>
                <p>Entre outros grandes benefícios de se programar em JavaScript, estão:</p>

                <ul>
                    <li>Versatilidade da linguagem;</li>
                    <li>Rapidez de leitura e, portanto, rapidez de execução;</li>
                    <li>Sintaxe acessível;</li>
                    <li>Não precisa ser compilada — ou seja, os navegadores são capazes de interpretá-la por conta própria;</li>
                    <li>Compatível com uma grande variedade de navegadores e plataformas;</li>
                </ul>

                <h3>Desvantagens</h3>
                <ul>
                    <li>Poucos recursos voltados à segurança;</li>
                    <li>Pode conter brechas para a execução de ações maliciosas;</li>
                    <li>O Node.js está propenso a mais vazamento de memória em processos de execução longa.</li>
                </ul>

                <SubTitle title="Conclusão" />
                <p>Se está querendo começar na programação e procurando os melhores meios para se inserir no mercado de tecnologia, investir no aprendizado de JavaScript pode ser a sua melhor opção!</p>
              

            </MainContent>
            <Footer />
        </>
    )
}