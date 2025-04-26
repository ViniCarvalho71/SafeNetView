const Button = ({ type, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-purple-300 w-[100px] text-white p-2 rounded"
    >
      {children}
    </button>
  );
};

export default Button;
