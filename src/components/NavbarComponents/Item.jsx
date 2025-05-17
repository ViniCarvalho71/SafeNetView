const Item = ({ item, onClick }) => {
  return (
    <div
      className="flex items-center justify-between p-2 hover:bg-gray-200 cursor-pointer"
      onClick={onClick}
    >
      <a className="flex items-center">
        item.icon
        <span className="white ml-3 a-solid fa-user">{item.name}</span>
      </a>
    </div>
  );
};

export default Item;
