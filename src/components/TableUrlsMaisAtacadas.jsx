import { useState, useEffect } from "react";

const TableUrlsMaisAtacadas = ({ labels, api }) => {
  const [requests, setRequests] = useState([]); // Estado para armazenar os dados da API
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [pages, setPages] = useState();

  const handleChanger = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    // Função para buscar os dados da API
    fetch(`${api}?page=${currentPage}&pageSize=${pageSize}`, {
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
        setPages(Math.ceil(data.quantidadeRegistros / pageSize));
      })
      .catch((error) => {
        console.error("Erro ao fazer a requisição:", error);
        setLoading(false); // Define o carregamento como concluído, mesmo em caso de erro
      });
  }, [search, currentPage, pageSize, api]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative overflow-x-auto shadow-lg sm:rounded-lg bg-white">
      {/* Barra de pesquisa */}
      <div className="flex justify-between items-center p-4">
        <input
          type="text"
          id="table-search-users"
          className="p-2 px-4 w-80 text-sm text-gray-900 border border-gray-300 rounded-lg"
          placeholder="Buscar URLs..."
          onChange={handleChanger}
        />
      </div>

      {/* Tabela */}
      <table className="w-full text-sm text-left text-white">
        <thead className="text-xs uppercase bg-[#381354] text-white">
          <tr>
            {labels.map((element, index) => (
              <th key={index} className="px-6 py-3">
                {element}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {requests.length > 0 ? (
            requests.map((request, index) => (
              <tr
                key={request.path}
                className={`border-b transition duration-300 ease-in-out hover:bg-purple-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-6 py-4">{request.path}</td>
                <td className="px-6 py-4">{request.quantidade}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="px-6 py-4 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Paginação */}
      <div className="flex justify-between items-center p-4 bg-[#381354] text-white rounded-b-lg">
        <div>
          <label htmlFor="limit-select" className="mr-2 text-sm">
            Registros por página:
          </label>
          <select
            id="limit-select"
            className="px-2 py-1 rounded text-black bg-white"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
          </select>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Anterior
          </button>
          <span className="mx-4">{`Página ${currentPage} de ${pages}`}</span>
          <button
            className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 disabled:opacity-50"
            disabled={currentPage === pages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Próxima
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableUrlsMaisAtacadas;
