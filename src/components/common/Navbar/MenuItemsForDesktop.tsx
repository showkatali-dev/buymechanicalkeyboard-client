import { NavLink } from "react-router-dom";
import { navMenus } from "./menu.constant";

const MenuItemsForDesktop = () => {
  return (
    <div className="flex gap-6 font-semibold">
      {navMenus.map((menu) => (
        <NavLink
          key={menu.name}
          to={menu.path}
          className={({ isActive }) =>
            `hover:text-primary transition px-2 ${
              isActive ? "text-primary" : ""
            }`
          }
        >
          {menu.name}
        </NavLink>
      ))}
    </div>
  );
};

export default MenuItemsForDesktop;
