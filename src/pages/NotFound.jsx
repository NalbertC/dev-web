import notfoud from "../assets/Scarecrow.png"
import "../styles/pages/notfound.css"

export function NotFound() {
    return (
        <>
            <div class="wrapper">
                <header class="cabecalho">
                    <h1 class="header-title">404 Not Found</h1>
                </header>

                <div class="content-notfoud">
                    <img src={notfoud} class="image" alt="Image 404"/>
                        <article class="info">
                            <h2 class="info-title">Eu tenho más notícias para você</h2>
                            <p class="info-description">A página que você está procurando pode ter sido removida ou estar temporariamente indisponível.</p>
                            <a href="/" class="info-btn">voltar à página inicial</a>
                        </article>
                </div>
            </div>
        </>
    )
}