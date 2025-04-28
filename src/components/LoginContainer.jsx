const LoginContainer = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="bg-purple-500 p-8 rounded-lg shadow-md w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export default LoginContainer;