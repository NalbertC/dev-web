import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";

export function Navegadores() {
    return (<>
        <Header />
        <MainContent>
            <Title title='Navegadores' />
            <SubTitle>O que é um navegador web?</SubTitle>

            <p>Um navegador web leva você a qualquer lugar na internet, permitindo ver textos, imagens e vídeos de qualquer lugar do mundo.</p>
            <img src="https://www.mozilla.org/media/img/firefox/browsers/what-is-a-browser/illo-browser.b70096fd5f78.png" alt="" />
            <p>A web é uma ferramente vasta e poderosa. Ao longo de poucas décadas, a internet mudou a maneira como trabalhamos, jogamos e interagimos uns com os outros. Dependendo de como é usada, ela conecta nações, impulsiona o comércio, nutre relacionamentos, impulsiona o mecanismo de inovação do futuro e é responsável pela criação de mais memes do que sabemos o que fazer com eles.</p>
            <p>É importante que todos tenham acesso à web, mas também é vital que todos nós entendamos as ferramentas que usamos para a acessar. Usamos navegadores web como Mozilla Firefox, Google Chrome, Microsoft Edge e Apple Safari todos os dias, mas entendemos o que eles são e como funcionam? Em um curto período de tempo, partimos de ficar maravilhados com a capacidade de enviar um email a alguém em qualquer lugar do mundo, para uma mudança de como pensamos sobre informação. Não é mais uma questão de quanto você sabe, mas simplesmente de qual navegador ou aplicativo consegue te levar à informação mais rapidamente.</p>

            <SubTitle>Como funciona um navegador web?</SubTitle>
            <p>Um navegador web te leva para qualquer lugar na internet. Ele obtém informações de outras partes da web e as exibe em seu computador ou dispositivo móvel. As informações são transferidas usando o Protocolo de Transferência de Hipertexto, que define como textos, imagens e vídeos são transmitidos na web. Essas informações precisam ser compartilhadas e exibidas num formato consistente, para que as pessoas que usam qualquer navegador, em qualquer lugar do mundo, possam ver as informações.</p>
            <p>Infelizmente, nem todos os produtores de navegadores optam por interpretar o formato da mesma forma. Para os usuários, isso significa que um site pode aparentar e funcionar de modo diferente. A criação de consistência entre navegadores, para que qualquer usuário possa desfrutar da internet, independente do navegador que escolher, é chamada de normas da web.</p>
            <SubTitle>Cookies (não os do tipo biscoito)</SubTitle>
            <p>Muitos sites salvam informações sobre você em arquivos chamados cookies. Eles são salvos no seu computador para ser usados na próxima vez que você visitar o site. Quando você retorna, o código do site lê esse arquivo para saber se é você. Por exemplo, ao acessar um site, a página memoriza seu nome de usuário e senha — isso é possível graças a um cookie.</p>
            <SubTitle>Entendendo a privacidade</SubTitle>
            <p>Quase todos os principais navegadores têm configurações de navegação privativa. Elas existem para ocultar o histórico de navegação de outros usuários do mesmo computador. Muitas pessoas acham que a navegação privativa, ou modo incógnito, oculta tanto suas identidades como o histórico de navegação de provedores de serviço de internet, governos e anunciantes. Isso não é verdade. Essas configurações apenas limpam o histórico do seu sistema, o que é útil caso você esteja lidando com informações pessoais sensíveis em um computador compartilhado ou público. O Firefox vai além disso.</p>

        </MainContent>
        <Footer />
    </>)
}