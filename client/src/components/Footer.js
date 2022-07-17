import React from "react";
import "../style/footer.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function () {
  return (
    <>
      <footer>
        <div className="footerEl">
          <p>©The DU Event Listeners 2022</p>
          <ul className="footer-list">
            <li>
              Olly
              <a href="https://github.com/ollyhite">
                <AiFillGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pei-yun-hite-29a3b49a/">
                <AiFillLinkedin size={20} />
              </a>
            </li>
            <li>
              Andy
              <a href="https://github.com/andypieratt">
                <AiFillGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/andrew-pieratt/">
                <AiFillLinkedin size={20} />
              </a>
            </li>
            <li>
              Kris
              <a href="https://github.com/MinnieAkuma199">
                <AiFillGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kristyn-del-campo-banrevy-8060b2197/">
                <AiFillLinkedin size={20} />
              </a>
            </li>
            <li>
              Peter
              <a href="https://github.com/PeterBookmyer">
                <AiFillGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/william-glynn-71b269125/">
                <AiFillLinkedin size={20} />
              </a>
            </li>
            <li>
              Ted
              <a href="https://github.com/ruxpin86">
                <AiFillGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/william-glynn-71b269125/">
                <AiFillLinkedin size={20} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
