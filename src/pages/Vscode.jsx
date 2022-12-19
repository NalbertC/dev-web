import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { Title } from "../components/Title";

export function Vscode() {
    return (<>
        <Header />
        <MainContent>
            <Title title='VSCode IDE' />
        </MainContent>
        <Footer />
    </>)
}