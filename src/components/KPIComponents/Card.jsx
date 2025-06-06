const Card = ({ label, number, color, txt_color, icon }) => {
  return (
    <div
      className={`flex flex-col ${color} ${txt_color} p-6 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105`}
    >
      <div className="flex items-center space-x-4 mb-4">
        {icon}
        <div className="text-xl font-bold">{label}</div>
      </div>
      <div className="text-4xl font-semibold">{number}</div>
    </div>
  );
};

export default Card;
