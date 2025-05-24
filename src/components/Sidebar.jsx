import Item from "./NavbarComponents/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="mt-8 mb-12">SafeNet</h2>
      <ul>
        <Item item={{ icon: "dsad", name: "Home" }} />
        <Item item={{ icon: "dsad", name: "IPs Maliciosos" }} />
        <Item item={{ icon: "dsad", name: "Urls Mais Atacadas" }} />
      </ul>
    </div>
  );
};

export default Sidebar;
