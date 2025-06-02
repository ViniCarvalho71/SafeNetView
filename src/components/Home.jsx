import Kpi from "./Kpi";
import TableHome from "./TableHome";

const Home = () => {
  
  return (
    <div>
      <Kpi />
      <div className="mt-12">
        <TableHome labels={["ID", "Agente", "Caminho", "Ip", "Maliciosa", "Data"]}
          api = "http://54.232.249.80:8080/api/Request/ListRequest/"
        />
      </div>
    </div>
  );
};

export default Home;
