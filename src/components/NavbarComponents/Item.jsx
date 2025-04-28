const Item = ({ item, onClick }) => {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-200 cursor-pointer"onClick={onClick}>
      <a className="flex items-center">
        <img src={item.icon} alt={item.name} className="w-6 h-6 mr-2" />
        <span className="text-gray-800">{item.name}</span>
      </a>
    </div>
  );
}

export default Item;