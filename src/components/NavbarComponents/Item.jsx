const Item = ({ item, onClick }) => {
  return (
    <li
      className="cursor-pointer text-left px-4 py-2 hover:bg-gray-700 rounded"
      onClick={onClick}
    >
      <span className="mr-2">{item.icon}</span>
      {item.name}
    </li>
  );
};

export default Item;
