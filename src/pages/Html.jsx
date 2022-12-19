import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";
import "../styles/pages/html.css";
import html from "../assets/html5.svg"

export function Html() {
    return (
        <>
            <Header />

            <MainContent>
                <Title title="Html" />



                <SubTitle title="O que é HTML?" />


                <p>
                    Um site médio inclui diversas páginas HTML diferentes. Por exemplo,
                    ele pode trazer uma página inicial, uma página “sobre” e uma página de
                    contato. Cada uma delas possui um arquivo HTML separado. Documentos
                    HTML são arquivos que terminam com uma extensão .html ou .htm. Um
                    navegador lê o arquivo HTML e renderiza o seu conteúdo para que os
                    usuários da internet possam vê-lo. Todas as páginas HTML possuem uma
                    série de elementos, que consistem num conjunto de tags e atributos. Os
                    elementos HTML são os tijolos de construção de uma página da internet.
                    Uma tag diz para o navegador onde um elemento começa e termina,
                    enquanto um atributo descreve as características de um elemento.
                </p>

                As três principais partes de um elemento são:
                <ul>
                    <li>
                        Tag de abertura – usada para dizer onde um elemento começa a ter
                        efeito. A tag é cercada de colchetes angulares para abertura e
                        fechamento. Por exemplo, use a tag de abertura &lt;p&gt; para criar
                        um parágrafo.
                    </li>
                    <li>Conteúdo – essa é a parte que os usuários verão.</li>
                    <li>
                        {" "}
                        Tag de fechamento – igual à tag de abertura, mas com uma barra antes
                        do nome do elemento. Por exemplo, &lt;p&gt; para encerrar um
                        parágrafo.
                    </li>
                </ul>

                <p> A combinação dessas três partes vai criar um elemento HTML.</p>

                <code>  &lt;/p&gt; É assim que você adiciona um parágrafo no HTML.&lt;/p&gt;</code>
                <p>
                    Outra parte crucial de um elemento HTML é o seu atributo, que possui
                    duas seções — um nome e um valor de atributo. O nome identifica a
                    informação adicional que um usuário deseja acrescentar, enquanto o
                    valor de atributo fornece mais especificações.
                </p>

                <p>
                    Por exemplo, um elemento de estilo que adiciona a cor roxa e uma fonte
                    da família verdana ficará assim:
                </p>



                <code>
                    <div>
                        <span class="enlighter-g1">&lt;</span>
                        <span class="enlighter-x1">p </span>
                        <span class="enlighter-text"></span>
                        <span class="enlighter-x2">style</span>
                        <span class="enlighter-k3">=</span>
                        <span class="enlighter-s0">"color:purple;font-family:verdana"</span>
                        <span class="enlighter-g1">&gt;</span>
                        <span class="enlighter-text">
                            É assim que você adiciona um parágrafo no HTML.
                        </span>
                        <span class="enlighter-g1">&lt;/</span>
                        <span class="enlighter-x1">p</span>
                        <span class="enlighter-g1">&gt;</span>
                    </div>
                </code><br />

                <SubTitle title="Tags e elementos Html mais usados" />


                <p>
                    Atualmente, existem 142 tags HTML disponíveis, que permitem a criação
                    de diversos elementos. Mesmo que os navegadores modernos não suportem
                    algumas dessas tags, você ainda vai se beneficiar de aprender sobre os
                    diferentes elementos disponíveis.
                </p>
                <p>
                    Esta seção vai discutir as tags HTML mais usadas e dois elementos
                    principais: os elementos bloco e os elementos em linha (inline).
                </p>


                <SubTitle title="Elementos bloco" />

                <p>
                    Os elementos bloco ocupam a largura completa de uma página. Eles
                    sempre iniciam uma nova linha no documento. Por exemplo, um elemento
                    cabeçalho estará numa linha diferente de um elemento parágrafo.
                </p>

                <p>Toda página HTML usa essas três tags:</p>

                <ul>
                    <li>
                        A tag &lt;html&gt;é o elemento raiz que define todo o documento
                        HTML.
                    </li>
                    <li>
                        A tag &lt;head&gt; contém metadados sobre o título e a codificação
                        de caracteres da página.
                    </li>
                    <li>
                        A tag &lt;body&gt; inclui todo o conteúdo que aparece na página.
                    </li>
                </ul>
                <code>
                    <p>
                        &lt;html&gt;<br />
                        &lt;head&gt;<br />
                        &lt;!--  INFORMAÇÕES --&gt;<br />
                        &lt;/head&gt;<br />
                        &lt;body&gt;<br />
                        &lt;!-- CONTEÚDO DA PÁGINA --&gt;<br />
                        &lt;/body&gt;<br />
                        &lt;/html&gt;<br />
                    </p>
                </code>

                <p>Outras tags de bloco populares são:</p>
                <ul>
                    <li>Tags de Cabeçalho – elas variam entre   &lt;h1&gt; e
                        &lt;h6&gt;, onde h1 tem um tamanho maior, que vai diminuindo até chegar no h6.</li>
                    <li>Tags de parágrafo – são abertas usando a tag   &lt;p&gt;.</li>
                    <li>Tags de lista – possuem diferentes variações. Use a tag
                        &lt;ol&gt; para uma lista ordenada, e a tag
                        &lt;ul&gt;S para uma lista sem ordem definida.
                        Então, envolva cada item da lista com a tag &lt;li&gt;.</li>
                </ul>

                <SubTitle title="Elementos em Linha" />
                <p> O elemento inline formatam o conteúdo interno de elementos de bloco.
                    Isso inclui a adição de links ou de linhas com ênfase. Os elementos inline são normalmente
                    usados para formatar texto sem quebrar o fluxo do conteúdo. </p>
                <p>Por exemplo, uma tag &lt;strong&gt; faz o elemento ser renderizado em negrito,
                    enquanto a tag &lt;em&gt; faz ele aparecer em itálico. Os hiperlinks também são elementos em
                    linha que usam uma tag &lt;a&gt; e um atributo href para indicar o destino do link:</p>
                <code>
                    <div><span class="enlighter-g1">&lt;</span>
                        <span class="enlighter-x1">a</span>
                        <span class="enlighter-text"> </span>
                        <span class="enlighter-x2">href</span>
                        <span class="enlighter-k3">=</span>
                        <span class="enlighter-s0">"https://example.com/"</span>
                        <span class="enlighter-g1">&gt;</span>
                        <span class="enlighter-text">Click me!</span>
                        <span class="enlighter-g1">&lt;/</span>
                        <span class="enlighter-x1">a</span>
                        <span class="enlighter-g1">&gt;</span>
                    </div>
                </code>

                < SubTitle title="A evolução do Html. Qual a diferença entre HTML e HTML5?" />

                <p>
                    Desde seu lançamento o HTML tem passado por muitas evoluções. O W3C constantemente publica novas versões e atualizações, enquanto que marcas históricas também recebem nomes dedicados.
                </p>

                <p>O HTML4 (comumente referido apenas como “HTML”) foi publicado em 1999, enquanto que a maior e mais recente atualização foi lançada em 2014. Chamada de HTML5, a atualização introduziu diversos novos recursos à linguagem.</p>
                <p>Um dos mais aguardados era a incorporação nativa de vídeos e arquivos de áudios. Ao invés de precisar utilizar o Flash Player, agora é possível incorporar vídeos e áudios com as novas tags &lt;audio&gt;&lt;/audio&gt; e &lt;video&gt;&lt;/video&lt;. Ele também possui compatibilidade com SVG (vetor gráfico escalável) e MathML para fórmulas científicas e matemáticas.</p>
                <p>O HTML5 também introduziu algumas melhorias de semântica. As novas tags semânticas informam ao navegador sobre o significado do conteúdo, o que auxilia tanto os leitores quanto os mecanismos de busca.</p>

                <SubTitle title="Prós e Contras do HTML"></SubTitle>
                <h3>Prós</h3>
                <ul>
                    <li>Uma linguagem amplamente utilizada com diversos recursos e uma comunidade gigante;</li>
                    <li>Roda em todos os navegadores;</li>
                    <li>Fácil aprendizado; </li>
                    <li>Totalmente grátis e de código-aberto; </li>
                    <li>Marcações limpas e consistentes;</li>
                    <li>Os padrões oficiais da internet são mantidos pelo Consórcio World Wide Web (W3C);</li>
                    <li>Integração fácil com linguagens de back-end como PHP e Node.js.</li>
                </ul>
                <h3>Contra</h3>

                <ul>
                    <li>

                        Geralmente utilizado para páginas estáticas. Para funcionalidade dinâmicas você provavelmente vai precisar usar JavaScript ou outra linguagem de back-end como PHP;</li>
                    <li>Não permite a implementação de lógica. Por isso todas as páginas precisam ser criadas separadamente, mesmo se utilizarem os mesmos elementos, como cabeçalhos e rodapés;</li>
                    <li>Alguns navegadores demoram para adotar novos recursos;</li>
                </ul>

                <SubTitle title="Conclusão"></SubTitle>
                <p>O HTML é a principal linguagem de programação encontrada na internet. Cada página HTML tem uma série de elementos que cria a estrutura dos conteúdos de uma página ou de um aplicativo.</p>

                <p>O HTML é uma linguagem amigável para iniciantes, que possui bastante suporte e é principalmente usada para páginas estáticas. O HTML funciona melhor quando usado em conjunto com o CSS para aplicar o estilo e com o JavaScript para implementar funcionalidades. Você pode conferir como linkar o HTML com CSS no nosso blog.</p>
                <img src={html} alt="" height={200} />

            </MainContent>
            <Footer />
        </>

    );
}
