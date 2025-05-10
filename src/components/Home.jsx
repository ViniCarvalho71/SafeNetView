import Kpi from "./Kpi";
import Table from "./Table";

const Home = () => {
  return (
    <div>
      <Kpi />
      <div className="mt-12">
        <Table />
      </div>
    </div>
  );
};

export default Home;
