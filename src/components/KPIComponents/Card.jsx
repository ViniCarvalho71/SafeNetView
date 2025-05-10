const Card = ({ label, number, color = "bg-purple-500", txt_color = "" }) => {
  return (
    <div className={`flex flex-col ${color} ${txt_color} p-4 rounded-lg`}>
      <div>{label}</div>
      <div>{number}</div>
    </div>
  );
};

export default Card;
