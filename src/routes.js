// Importa o React, necessário para utilizar JSX e componentes React.
import React from "react";
// Importa BrowserRouter, Routes, e Route do 'react-router-dom' para manipulação de rotas na aplicação.
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importa os componentes de páginas que serão utilizados nas rotas.
import Musicas from "./pages/musicas/Musicas";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Adicionar from "./pages/adicionar/Adicionar";
import Editar from "./pages/editar/Editar";

// Define o componente Rotas, que configura as rotas da aplicação.
function Rotas() {
    return (
        // Fragmento React para agrupar a lista de componentes sem adicionar nós extras ao DOM.
        <>
            {/* BrowserRouter é o componente de roteador que utiliza a API de histórico HTML5 (pushState, replaceState e o evento popstate)
                para manter sua UI sincronizada com a URL. */}
            <BrowserRouter>
                {/* Routes é o componente que encapsula múltiplas rotas. */}
                <Routes>
                    {/* Define a rota para a página inicial ("/") e associa ao componente Home. */}
                    <Route path="/" element={<Home />} />
                    {/* Define a rota para a página de músicas ("/musicas") e associa ao componente Musicas. */}
                    <Route path="/musicas" element={<Musicas />} />
                    {/* Define a rota para capturar qualquer URL não especificada anteriormente e associa ao componente NotFound. */}
                    <Route path="*" element={<NotFound />} />
                    {/* Define a rota para a página de adicionar novas músicas ("/adicionar") e associa ao componente Adicionar. */}
                    <Route path="/adicionar" element={<Adicionar />} />
                    <Route path="/editar/:idCard" element={<Editar />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

// Exporta o componente Rotas para que possa ser utilizado em outras partes da aplicação, como no componente principal App.
export default Rotas;