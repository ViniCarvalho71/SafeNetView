const Item = ({ item, onClick, isActive }) => {
  return (
    <li
      className={`cursor-pointer text-left px-6 py-3 flex items-center space-x-3 rounded-lg transition-all duration-200 ${
        isActive
          ? "bg-white text-purple-700 shadow-md" // Cor de fundo e sombra para o item ativo
          : "text-white hover:bg-gray-700" // Cor para itens não ativos
      }`}
      onClick={onClick}
    >
      <span>{item.icon}</span> {/* Exibe o ícone */}
      <span className={`${isActive ? "font-semibold" : ""}`}>{item.name}</span> {/* Exibe o nome */}
    </li>
  );
};

export default Item;
