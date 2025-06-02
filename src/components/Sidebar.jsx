import Item from "./NavbarComponents/Item";

const Sidebar = ({onSelect}) => {
  const items = [
    { icon: "🏠", name: "Home" },
    { icon: "🛑", name: "IPs Maliciosos" },
    { icon: "🌐", name: "Urls Mais Atacadas" },
  ];

  return (
    <div className="sidebar p-4">
      <h2 className="mt-8 mb-12 text-xl font-bold">SafeNet</h2>
      <ul>
        {items.map((item) => (
          <Item key={item.name} item={item} onClick={() => onSelect(item.name)} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
