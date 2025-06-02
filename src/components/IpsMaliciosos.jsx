
import TableIps from "./TableIps";

const IpsMaliciosos = () => {
  return (
    <div>
      <div className="mt-12">
        <TableIps labels={["Ip", "Quantidade"]}
          api = "http://localhost:5101/api/Request/IpsMaisPerigosos/"
        />
      </div>
    </div>
  );
};

export default IpsMaliciosos;
