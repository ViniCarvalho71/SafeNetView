import { useEffect, useState } from "react";
import Home from "./Home";
import IpsMaliciosos from "./IpsMaliciosos";
import UrlsMaisAtacadas from "./UrlsMaisAtacadas";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [selectedPage, setSelectedPage] = useState("Home");

  useEffect(() => {
    fetch("http://localhost:5101/auth/check", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        setIsAuthenticated(res.ok);
      })
      .catch(() => setIsAuthenticated(false));
  }, []);

  if (isAuthenticated === null) return <div>Carregando...</div>;
  if (!isAuthenticated) {
    window.location.href = "/";
    return null;
  }

  const renderContent = () => {
    switch (selectedPage) {
      case "Home":
        return <Home />;
      case "IPs Maliciosos":
        return <IpsMaliciosos />;
      case "Urls Mais Atacadas":
        return <UrlsMaisAtacadas />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="h-screen overflow-x-hidden">
      <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white">
        <Sidebar onSelect={setSelectedPage} />
      </div>

      <div className="ml-64 p-8 bg-gray-100 min-h-screen">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
