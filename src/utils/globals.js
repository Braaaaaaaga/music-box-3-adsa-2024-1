// Define a função transformarData que recebe uma string de data como argumento
function transformarData(dataString) {
    // Cria um objeto Date usando a string fornecida
    const data = new Date(dataString);
    // Extrai o dia do mês do objeto Date, converte para string e adiciona um zero à esquerda se necessário
    const dia = data.getDate().toString().padStart(2, '0');
    // Extrai o mês do objeto Date, ajusta o mês (porque getMonth() começa de 0),
    // converte para string e adiciona um zero à esquerda se necessário
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    // Extrai o ano do objeto Date
    const ano = data.getFullYear();
    // Retorna a data formatada em dia/mês/ano
    return `${dia}/${mes}/${ano}`;
}

// Exporta a função transformarData para que possa ser usada em outras partes da aplicação
export default transformarData;