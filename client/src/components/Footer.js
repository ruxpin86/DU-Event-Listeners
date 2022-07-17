import React from "react";
import "../style/footer.css";
import { AiFillGithub } from "react-icons/ai";

export default function () {
  return (
    <>
      <footer>
        <div className="footerEl">
          <p>©The DU Event Listeners 2022</p>
          <ul className="footer-list">
            <li>Olly</li>
            <li>Andy</li>
            <li>Kris</li>
            <li>Peter</li>
            <li>
              <a href="https://github.com/ruxpin86">
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
