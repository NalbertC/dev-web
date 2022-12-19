import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { Title } from "../components/Title";

export function Navegadores() {
    return (<>
        <Header />
        <MainContent>
            <Title title='Navegadores' />
        </MainContent>
        <Footer />
    </>)
}