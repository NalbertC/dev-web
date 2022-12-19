import "../styles/maincontent.css"

export function MainContent(props) {
    return (
        <div className="main-content">
            <div className="content-pages">
                {props.children}
            </div>
        </div>
    )
}