import "../styles/title.css"


export function Title2(props) {
    return (
        <h2 className="title2">{props.title}</h2>
    )
}


export function SubTitle(props) {

    return (
        <h2 className="subtitle-page">
            {props.title}{props.children}
        </h2>
    )

}

export function ListOrd(props) {
    return (
        <h4 className="list-ord">{props.title}</h4>
    )
}