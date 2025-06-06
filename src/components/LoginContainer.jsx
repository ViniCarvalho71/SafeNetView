import logo from "../assets/logo.png"; // Caminho correto para a logo

const LoginContainer = ({ children }) => {
  return (
    <div
      className="flex items-center justify-center min-h-screen w-full bg-[#381354]" // Fundo roxo
    >
      <div className="w-full max-w-md p-8">
        {/* Logo no topo */}
        <img
          src={logo} // Usando a logo importada corretamente
          alt="SafeNet Logo"
          className="w-100 mx-150 mb-150" // Margem maior para mover a logo um pouco mais para baixo
        />
        {children}
      </div>
    </div>
  );
};

export default LoginContainer;
