import { useState } from "react";
import Item from "./NavbarComponents/Item";
import { FaHome, FaStopCircle, FaLink } from "react-icons/fa";

const Sidebar = ({ onSelect }) => {
  const [active, setActive] = useState("Home"); // Estado para selecionar o item ativo

  const items = [
    { icon: <FaHome className="text-xl" />, name: "Home" },
    { icon: <FaStopCircle className="text-xl" />, name: "IPs Maliciosos" },
    { icon: <FaLink className="text-xl" />, name: "Urls Mais Atacadas" },
  ];

  return (
    <div
      className="sidebar p-4"
      style={{
        backgroundColor: "#381354", // Cor de fundo roxa
        height: "100vh", // Garante que a Sidebar ocupe toda a altura da tela
      }}
    >
      <h2 className="mt-8 mb-12 text-xl font-bold text-white">SafeNet</h2>
      <ul>
        {items.map((item) => (
          <Item
            key={item.name}
            item={item}
            onClick={() => {
              onSelect(item.name);
              setActive(item.name); // Atualiza o item ativo ao clicar
            }}
            isActive={active === item.name} // Verifica se o item é o ativo
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
