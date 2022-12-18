import "../styles/artigo.css"

import {FaRegFileCode} from 'react-icons/fa'

export function CodigoExemplo(props) {

    return (

        <a href={props.src}><FaRegFileCode /><b>Exemplo de código</b> </a>
    )

}