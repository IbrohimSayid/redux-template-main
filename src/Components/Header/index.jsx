import React from "react";
import { Badge, Dropdown, Space } from "antd";

import { ShoppingCartOutlined } from "@ant-design/icons";
import { container } from "./style.module.css";

import Cart from "../cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <header>
      <div className={container}>
        <h2><Link to="/">Logo</Link></h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>

        <Dropdown dropdownRender={() => <Cart />}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Badge count={cart.length}>
                <ShoppingCartOutlined
                  style={{ zoom: "2.2", color: "white", cursor: "pointer" }}
                />
              </Badge>
            </Space>
          </a>
        </Dropdown>
      </div>
    </header>
  );
}
