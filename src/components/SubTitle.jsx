import "../styles/title.css"


export function SubTitle(props) {

    return (
        <h2 className="subtitle-page">
            {props.title}{props.children}
        </h2>
    )

}