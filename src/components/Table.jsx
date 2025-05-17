import React, { useState, useEffect } from "react";

const Table = () => {
  const [requests, setRequests] = useState([]); // Estado para armazenar os dados da API
  const [loading, setLoading] = useState(true); // Estado para indicar o carregamento

  useEffect(() => {
    // Função para buscar os dados da API
    fetch("http://localhost:5101/api/Request/ListRequest", {
      method: "GET",
      credentials: "include", // necessário para enviar o cookie
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setRequests(data.data); // Atualiza o estado com os dados recebidos
        setLoading(false); // Define o carregamento como concluído
      })
      .catch((error) => {
        console.error("Erro ao fazer a requisição:", error);
        setLoading(false); // Define o carregamento como concluído, mesmo em caso de erro
      });
  }, []); // O array vazio [] garante que a requisição seja feita apenas uma vez após o componente ser montado

  // Renderiza uma mensagem de "Carregando..." enquanto os dados estão sendo carregados
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
          <div className="relative">
            <div className="ml-4 absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block ml-4 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Agente
              </th>
              <th scope="col" className="px-6 py-3">
                Caminho
              </th>
              <th scope="col" className="px-6 py-3">
                IP
              </th>
              <th scope="col" className="px-6 py-3">
                Maliciosa
              </th>
              <th scope="col" className="px-6 py-3">
                Data
              </th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((request) => (
                <tr
                  key={request.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {request.id}
                  </th>
                  <td className="px-6 py-4">{request.agent}</td>
                  <td className="px-6 py-4">{request.path}</td>
                  <td className="px-6 py-4">{request.ip}</td>
                  <td className="px-6 py-4">
                    {request.isMalicious ? "Sim" : "Não"}
                  </td>
                  <td className="px-6 py-4">
                    {new Date(request.date).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
