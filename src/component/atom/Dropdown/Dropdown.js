import Dropdown from "react-bootstrap/Dropdown";

const DropdownMenu = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Samet Guler
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu">
        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Baglantilar</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Iletisim</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenu;
