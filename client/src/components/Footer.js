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
              <a href="https://github.com/ollyhite" target="blank">
                <AiFillGithub size={20} />
              </a>
              Olly
              <a
                href="https://www.linkedin.com/in/pei-yun-hite-29a3b49a/"
                target="blank"
              >
                <AiFillLinkedin size={20} />
              </a>
            </li>
            <li>
              <a href="https://github.com/andypieratt" target="blank">
                <AiFillGithub size={20} />
              </a>
              Andy
              <a
                href="https://www.linkedin.com/in/andrew-pieratt/"
                target="blank"
              >
                <AiFillLinkedin size={20} />
              </a>
            </li>
            <li>
              <a href="https://github.com/MinnieAkuma199" target="blank">
                <AiFillGithub size={20} />
              </a>
              Kris
              <a
                href="https://www.linkedin.com/in/kristyn-del-campo-banrevy-8060b2197/"
                target="blank"
              >
                <AiFillLinkedin size={20} />
              </a>
            </li>
            <li>
              <a href="https://github.com/PeterBookmyer" target="blank">
                <AiFillGithub size={20} />
              </a>
              Peter
              <a
                href="https://www.linkedin.com/in/peter-bookmyer-60a77144/"
                target="blank"
              >
                <AiFillLinkedin size={20} />
              </a>
            </li>
            <li>
              <a href="https://github.com/ruxpin86" target="blank">
                <AiFillGithub size={20} />
              </a>
              Ted
              <a
                href="https://www.linkedin.com/in/william-ted-glynn-71b269125"
                target="blank"
              >
                <AiFillLinkedin size={20} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
