import { GrArticle } from "react-icons/gr"

import "../styles/artigo.css"
export function Artigo(props) {
    return (
        <a href={props.src}><GrArticle /><b>Artigo Principal</b></a>
    )
}