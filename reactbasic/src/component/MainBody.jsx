import React from "react";
import "./MainBody.css";

function MainBody() {
  return (
    <div className="main-wrapper">
      <section className="background">
        <div className="front-txt">
          <h2 className="front-title">Lorem ipsum dolor sit.</h2>
          <p className="front-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eos
            nisi, nemo deleniti veritatis <br />
            mollitia unde ipsam odit quas provident quae velit amet placeat
            facilis quaerat atque quasi, quidem maxime.
          </p>
          <button
            className="front-btn"
            type="button"
            onClick="alert('Hello World')"
          >
            버튼
          </button>
        </div>
      </section>

      <section className="margin-top">
        <div className="second-txt">
          <h2>Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            repudiandae eaque accusamus commodi quibusdam quis?
          </p>
        </div>
      </section>

      <section className="post-box">
        <div className="post-card">
          <h2>Lorem ipsum dolor sit.</h2>
          <p className="post-card-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quam?
            Quas porro possimus nemo mollitia hic ut, architecto voluptatibus
            laborum!
          </p>
        </div>

        <div className="post-card">
          <h2>Lorem ipsum dolor sit.</h2>
          <p className="post-card-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quam?
            Quas porro possimus nemo mollitia hic ut, architecto voluptatibus
            laborum!
          </p>
        </div>

        <div className="post-card">
          <h2>Lorem ipsum dolor sit.</h2>
          <p className="post-card-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quam?
            Quas porro possimus nemo mollitia hic ut, architecto voluptatibus
            laborum!
          </p>
        </div>
      </section>
    </div>
  );
}

export default MainBody;
