import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <h1>Khaled Ghonim</h1>
        <div className="mainheader">
          <ul className="MainMenu">
            <li>
              <a href="-">HTML</a>
              <ul className="sub-ul">
                <li>
                  <a href="-">Khaled</a>
                </li>
                <li>
                  <a href="-">Mohamed</a>
                </li>
                <li>
                  <a href="-">Ghonim</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="-">CSS</a>
              <ul className="sub-ul">
                <li>
                  <a href="-">Omar</a>
                </li>
                <li>
                  <a href="-">Mohamed</a>
                </li>
                <li>
                  <a href="-">Ghonim</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="-">JavaScript</a>
              <ul className="sub-ul">
                <li>
                  <a href="-">Shahd</a>
                </li>
                <li>
                  <a href="-">Mohamed</a>
                </li>
                <li>
                  <a href="-">Ghonim</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
