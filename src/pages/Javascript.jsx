import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";

import { AiOutlineHome, AiOutlineTeam } from "react-icons/ai"


export function Javasript() {
    return (

        <>
        <Header/>
           
           <MainContent>
            <Title title='JavaScript'/>
            <SubTitle title={<AiOutlineHome/>}>Oque é?</SubTitle>
           </MainContent>
           <Footer/>
        </>
    )
}