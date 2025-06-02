
import TableUrlsMaisAtacadas from "./TableUrlsMaisAtacadas";

const UrlsMaisAtacadas = () => {
  return (
    <div>
      <div className="mt-12">
        <TableUrlsMaisAtacadas labels={["Path", "Quantidade"]}
          api = "http://localhost:5101/api/Request/PathsMaisAtacados/"
        />
      </div>
    </div>
  );
};

export default UrlsMaisAtacadas;
