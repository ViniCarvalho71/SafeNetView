const Card = ({ label, number, color = "bg-gray-900", txt_color = "text-white" }) => {
  return (
    <div className={`flex flex-col ${color} ${txt_color} p-4 rounded-lg w-[300px] h-[150px] justify-center`}>
      <div className="text-xl">
        <div>{label}</div>
        <div>{number}</div>
      </div>
    </div>
  );
};

export default Card;
