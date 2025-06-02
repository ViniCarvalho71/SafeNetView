
import TableUrlsMaisAtacadas from "./TableUrlsMaisAtacadas";

const UrlsMaisAtacadas = () => {
  return (
    <div>
      <div className="mt-12">
        <TableUrlsMaisAtacadas labels={["Path", "Quantidade"]}
          api = "http://54.232.249.80:8080/api/Request/PathsMaisAtacados/"
        />
      </div>
    </div>
  );
};

export default UrlsMaisAtacadas;
