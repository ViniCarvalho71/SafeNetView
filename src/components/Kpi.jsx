import { useEffect, useState } from "react";
import Card from "./KPIComponents/Card";
import { FaExclamationCircle, FaCheckCircle, FaClock } from "react-icons/fa";

const Kpi = () => {
  const [kpis, setKpis] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5101/api/Request/Kpis`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setKpis(data.data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {/* Card: Requisições Maliciosas */}
      <Card
        label="Requisições Maliciosas"
        txt_color="text-white"
        number={kpis.requisicoesMaliciosas}
        color="bg-red-600"
        icon={<FaExclamationCircle className="text-white text-2xl" />}
      />

      {/* Card: Requisições Benignas */}
      <Card
        label="Requisições Benignas"
        txt_color="text-white"
        number={kpis.requisicoesBenignas}
        color="bg-green-600"
        icon={<FaCheckCircle className="text-white text-2xl" />}
      />

      {/* Card: Requisições nas Últimas 24hrs */}
      <Card
        label="Requisições nas últimas 24hrs"
        txt_color="text-white"
        number={kpis.requisicoesNasUltimasVinteQuatroHoras}
        color="bg-blue-600"
        icon={<FaClock className="text-white text-2xl" />}
      />
    </div>
  );
};

export default Kpi;
