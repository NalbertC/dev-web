import "../styles/cardlinguagem.css"


export function CardLinguagem(props) {



    return <>

        <div className="flex card">
            <div className="flex ling">
                <img src={props.src} width={75} height={75} />
            </div>
            <div className="flex resumo">
                <span className="card-title">{props.title}</span>
                {props.children}
            </div>
        </div>

    </>
}