import "../styles/telefone.css"

function alerta() {
    alert(`Voçê acessou o nosso WhatsApp, Obrigado!`)
}

export function Telefone() {
    return (
        <>
            <div className="container" onClick={() => { alerta() }}>
                <div className="pulse">
                    <i className="fa fa-phone"></i>
                </div>
            </div>
        </>)
}