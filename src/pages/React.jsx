import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { ListOrd, SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";

export function React() {
    return (
        <>

            <Header />
            <MainContent>
                <Title title='React' />
                <SubTitle >O que é o React?</SubTitle>
                <p>É uma biblioteca JavaScript declarativa, eficiente e flexível criada pelo Facebook em 2011 para desenvolver aplicações front-end, ou seja, interfaces de usuário (UIs).</p>

                <p>Logo após a criação, o React foi amplamente utilizado no feed de notícias da rede social, e em 2013, a empresa disponibilizou o código aberto para a comunidade, contribuindo para a popularização da biblioteca.</p>
                <p>Atualmente, o React é uma das bibliotecas mais prestigiadas do mercado, presente em mais de 3,4 milhões de projetos. O fato de ser open source permite que todos os programadores tenham acesso ao código-fonte e possam realizar modificações e aprimoramentos no código.</p>

                <SubTitle >Como funciona o React?</SubTitle>
                <p>Mais do que saber sobre React você precisa saber como ele funciona. Então vamos lá, para atuar como uma biblioteca eficiente para o desenvolvimento de aplicações front-end, é composto por elementos interativos. Seu funcionamento realiza-se por meio de componentes, os quais são responsáveis por facilitar a conexão entre diferentes partes de uma página.</p>
                <p>Pode-se dizer que o React decompõe uma tela em vários componentes para, em seguida, trabalhar sobre cada uma delas de forma individualizada.</p>
                <p>Os componentes permitem o reaproveitamento de códigos e a padronização de interfaces, o que faz do React uma tecnologia extremamente flexível para a solução de problemas e para a construção de interfaces reutilizáveis, afinal, cada componente pode ser trabalhado de modo distinto.</p>
                <br />
                <img src="https://global-uploads.webflow.com/5ebc02b7be66aaaf272bb0c4/60ee2c9665dc45194bdc79cd_o-que-e-react-js-e-como-ele-funciona-para-seo.jpg" alt="" />

                <SubTitle >Características do React</SubTitle>

                <ListOrd title='1-Componentes' />
                <p>O React é uma biblioteca formada por componentes, sendo capaz de dividir uma página em vários setores, por exemplo: BarraLateral, BotaoChamada, MenuSuperior ou como o programador desejar. Cada item se torna um componente individual, com suas próprias características, e depois de individualizados e categorizados, cada componente dessa biblioteca pode ser reutilizado em outros sites ou aplicações.</p>

                <ListOrd title='2-Propriedades' />
                <p>As propriedades são inseridas nos componentes, são objetos ricos com uma variedade de informações, como função, número ou string.</p>

                <ListOrd title='3-Estado' />
                <p>De maneira semelhante às propriedades, os estados são objetos com informações relevantes, entretanto, distingue-se delas por serem mutáveis e criados dentro do componente, como variáveis dentro de uma função.</p>

                <ListOrd title='4-Virtual DOM' />
                <p>O DOM (Document Object Model) é uma estrutura que representa a camada visual de uma interface.</p>
                <p>O React atua com o Virtual DOM, também denominado VDOM, que é a simulação virtual do DOM real de uma página.</p>
                <p>Assim, ao realizar uma atualização, atividade rotineira dos profissionais do front-end, o React salva as alterações em memória no VDOM, pois a manipulação do VDOM é bem mais rápida do que a manipulação na própria interface que está sendo atualizada (DOM real).</p>


                <SubTitle >Onde usar React?</SubTitle>
                <p>O React deve ser amplamente usado no front-end. Lembre-se que é uma biblioteca voltada exclusivamente para o desenvolvimento de interfaces (UIs).</p>

                <SubTitle >Quem usa React?
</SubTitle>
                <p>Além da empresa criadora do React e seus grupos, Facebook, Instagram e WhatsApp. Outras grandes empresas aproveitaram o sucesso da biblioteca para incorporarem em seus processos.</p>
                <p>Alguns exemplos de organizações que usam o React para construção de suas interfaces são: Netflix, Airbnb, American Express,  eBay, Dropbox, Tesla, Buscapé, iFood, entre outros.</p>
            </MainContent>
            <Footer />

        </>
    )
}