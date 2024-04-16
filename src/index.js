// Importa o componente App de './App'
import App from './App';
// Importa o React para possibilitar o uso de JSX e componentes React
import React from 'react';
// Importa o arquivo CSS global para aplicar estilos globais à aplicação
import "./utils/globals.css";
// Importa o arquivo JavaScript global para executar scripts globais que podem incluir configurações ou utilitários
import "./utils/globals.js";
// Importa a função específica ReactDOM.createRoot do pacote react-dom/client, que é usada para inicializar o DOM para o React
import ReactDOM from 'react-dom/client';

// Cria uma instância da raiz do React, onde a aplicação será montada
// O método document.getElementById('root') obtém o elemento DOM com o ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro do modo estrito do React
// React.StrictMode é uma ferramenta para destacar problemas potenciais na aplicação
// Incluir o App dentro do <React.StrictMode> ajuda a detectar problemas de forma antecipada durante o desenvolvimento
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);