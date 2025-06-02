import { useState, useEffect } from "react";

const TableIps = ({labels, api}) => {
    const [requests, setRequests] = useState([]); // Estado para armazenar os dados da API
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [pages, setPages] = useState()

    const handleChanger = (event) => {
        setSearch(event.target.value)
    }
    var url = ""
    if (search === "") {
        url = `${api}?page=${currentPage}&pageSize=${pageSize}`;
    } else {
        url = `${api}?search=${search}&page=${currentPage}&pageSize=${pageSize}`;
    }
    useEffect(() => {
    // Função para buscar os dados da API
    fetch(url, {
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
        setPages(Math.ceil(data.quantidadeRegistros / pageSize))
        })
        .catch((error) => {
        console.error("Erro ao fazer a requisição:", error);
        setLoading(false); // Define o carregamento como concluído, mesmo em caso de erro
        });
  }, [search,currentPage,pageSize, api]); // O array vazio [] garante que a requisição seja feita apenas uma vez após o componente ser montado

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
                onChange={handleChanger}
            />
            </div>
        </div>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {labels.map((element, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                    {element}
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {requests.length > 0 ? (
                requests.map((request) => (
                <tr
                    key={request.ip}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border-gray-200"
                >
                    <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                    {request.ip}
                    </th>
                    <td className="px-6 py-4">{request.quantidade}</td>
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

        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
            <label
                htmlFor="limit-select"
                className="mr-2 text-sm text-gray-700 dark:text-gray-300"
            >
                Registros por página:
            </label>
            <select
                id="limit-select"
                className="px-2 py-1 rounded border border-gray-300 dark:bg-gray-700 dark:text-white"
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
                className="px-4 py-2 bg-gray-200 dark:bg-gray-600 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-500 disabled:opacity-50 transition-colors duration-200"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
            >
                Anterior
            </button>
            <span className="text-sm text-gray-700 dark:text-gray-300 mx-5">
                Página {currentPage} de {pages}
            </span>
            <button
                className="px-4 py-2 bg-gray-200 dark:bg-gray-600 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-500 disabled:opacity-50 transition-colors duration-200"
                disabled={currentPage === pages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
            >
                Próxima
            </button>
            </div>
        </div>
        </div>
    </div>

    );
};

export default TableIps;
