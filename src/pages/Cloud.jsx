import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { Title } from "../components/Title";
import { SubTitle } from "../components/SubTitle";

export function Cloud() {
    return (
        <>
            <Header />
            <MainContent>
                <Title title='Serviços de Hospedagem' />
                <SubTitle title='Util' />
            </MainContent>

            <Footer />
        </>
    )
}