const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="rounded-full outline-none p-3 mb-3 text-mb w-[400px]"
    />
  );
};

export default Input;
