const Label = ({ text, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="block mb-2 text-gray-200 text-2xl">
      {text}
    </label>
  );
};

export default Label;
