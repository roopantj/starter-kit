import React from "react";

const SidebarItem = ({ children }) => (
  <div className="sidebar-item">{children}</div>
);

// TODO Q5
const Sidebar = (props) => {
  const { items } = props;
  const keys = Object.keys(items);
  const menuItems = keys.filter((key) => key.includes("line")).sort();

  return (
    <div className="sidebar" data-testid="sidebar">
      {menuItems.map((item, index) => {
        if (index < items.count)
          return <SidebarItem key={item}>{props?.items[item]}</SidebarItem>;
        return null;
      })}
    </div>
  );
};

export default Sidebar;
