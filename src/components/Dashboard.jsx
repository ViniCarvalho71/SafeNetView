import { useEffect, useState } from "react";
import Home from "./Home";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5101/auth/check", {
      method: "GET",
      credentials: "include", // necessário para enviar o cookie
    })
      .then((res) => {
        setIsAuthenticated(res.ok);
      })
      .catch(() => setIsAuthenticated(false));
  }, []);

  if (isAuthenticated === null) {
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated) {
    window.location.href = "/";
  }

  return (
    <div className="flex h-screen m-0 p-0">
      <div className="w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>

      {/* Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <Home />
      </div>
    </div>
  );
};

export default Dashboard;
