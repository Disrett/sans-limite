// components/Navbar/Navbar.js
import { MenuItems } from "./MenuItems";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <Nav className="NavbarItems">
      <h1 className="Navbar-logo">React</h1>
      <div className="menu-icon"></div>
      <ul>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <a className={item.cName} href={item.url}>
              {item.Title}
            </a>
          </li>
        ))}
      </ul>
    </Nav>
  );
}
