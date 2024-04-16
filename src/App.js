// Importa o componente Rotas de "./routes", usado para definir as rotas da aplicação
import Rotas from "./routes";
// Importa os estilos CSS do react-toastify para utilizar os componentes de notificação
import 'react-toastify/dist/ReactToastify.css';
// Importa o componente ToastContainer do react-toastify, que será usado para mostrar as notificações
import { ToastContainer } from 'react-toastify';

// Define o componente App, que é o componente principal da aplicação
function App() {
  return (
    <>
      {/* Inclui o componente Rotas, que é responsável por renderizar as diferentes rotas da aplicação */}
      <Rotas />
      {/* Inclui o componente ToastContainer, que renderiza um container para as mensagens de notificação */}
      <ToastContainer />
    </>
  );
}

// Exporta o componente App para que possa ser utilizado em outras partes da aplicação
export default App;