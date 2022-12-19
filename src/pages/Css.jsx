import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { MainContent } from "../components/MainContent";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";



export function Css() {
    return (<>
        <Header />

        <MainContent>
            <Title title='Css'/>
            <SubTitle title='Util'/>
            
        </MainContent>

        <Footer />
    </>)
}