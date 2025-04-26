const Container = ({ children }) => {
  return (
    <div className="bg-purple-500 h-[700px] w-[600px] rounded-xl flex justify-center items-center flex-col">
      {children}
    </div>
  );
};

export default Container;
