import Item from "./NavbarComponents/Item";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="mt-5">SafeNet</h2>
      <ul>
        <Item item={{ icon: "dsad", alt: "dsad", name: "Home" }} />
        <Item item={{ icon: "dsad", alt: "dsad", name: "Home" }} />
        <Item item={{ icon: "dsad", alt: "dsad", name: "Home" }} />
      </ul>
    </div>
  );
};

export default Sidebar;
