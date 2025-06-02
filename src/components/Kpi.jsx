import { useEffect, useState } from "react";
import Card from "./KPIComponents/Card";

const Kpi = () => {
  const [kpis, setKpis] = useState(1);
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
    <div className="flex flex-row justify-between">
      <Card label="Requisições Maliciosas" txt_color="text-red-700" number = {kpis.requisicoesMaliciosas} />
      <Card label="Requisições Benignas" txt_color="text-lime-500" number= {kpis.requisicoesBenignas}/>
      <Card label="Requisições nas últimas 24hrs" txt_color="text-sky-500" number= {kpis.requisicoesNasUltimasVinteQuatroHoras} /> 
    </div>
  );
};

export default Kpi;
