import React from "react";
import "./MainFooter.css";

function MainFooter() {
  return (
    <footer>
      <div className="global-footer">
        <h3>Contact</h3>
        <ul className="footer-list">
          <li className="footer-item">
            <a href="mailto:asosa78@naver.com">메일</a>
          </li>
          <li className="footer-item">
            <a href="tel:01024586092">전화</a>
          </li>
          <li className="footer-item">
            <a href="https://www.youtube.com">유튜브</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default MainFooter;
