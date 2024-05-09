import React, { useContext, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { DarkMode } from "../../context/context";
export default function Header() {
  const {
    state: { darkmode, lanuage },
    CHANGEMODE,
    til,
  } = useContext(DarkMode);
  return (
    <header>
      <div className="container header-container">
        {/* <a className="logo">Linklardan birini tanlab uni bo'sing ! </a> */}
        <nav>
          <ul className="list">
            <li className="list-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <select
          value={lanuage}
          onChange={(e) => {
            console.log(e.target.value);
            til(e.target.value);
          }}
          className="select"
        >
          <option selected value="uz">
            UZ
          </option>
          <option value="eng">ENG</option>
          <option value="ru">RU</option>
          <option value="portugal">Portugal</option>
          <option value="spanish">Ispan</option>
        </select>
        <NavLink
          onClick={() => {
            CHANGEMODE();
          }}
          className="header-btn"
        >
          {darkmode ? "LightMode" : "DarkMode"}
        </NavLink>
      </div>
    </header>
  );
}
