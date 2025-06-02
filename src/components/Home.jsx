import Kpi from "./Kpi";
import TableHome from "./TableHome";

const Home = () => {
  
  return (
    <div>
      <Kpi />
      <div className="mt-12">
        <TableHome labels={["ID", "Agente", "Caminho", "Ip", "Maliciosa", "Data"]}
          api = "http://localhost:5101/api/Request/ListRequest/"
        />
      </div>
    </div>
  );
};

export default Home;
