
import TableIps from "./TableIps";

const IpsMaliciosos = () => {
  return (
    <div>
      <div className="mt-12">
        <TableIps labels={["Ip", "Quantidade"]}
          api = "http://54.232.249.80:8080/api/Request/IpsMaisPerigosos/"
        />
      </div>
    </div>
  );
};

export default IpsMaliciosos;
