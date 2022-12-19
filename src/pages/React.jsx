import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";

export function React() {
    return (
        <>

            <Header />
            <MainContent>
                <Title title='React' />
                <SubTitle >React</SubTitle>

                
            </MainContent>
            <Footer />

        </>
    )
}