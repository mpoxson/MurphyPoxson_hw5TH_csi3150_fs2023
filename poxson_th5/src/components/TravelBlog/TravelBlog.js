import React from "react";
import "./Travelblog.css";

const TravelBlog = (props) => {
  return (
    <div className="holder">
      <div>
        <h3>{props.place}</h3>
      </div>
      <article className="imgCont">
        <img src={props.img1} alt={props.place} />
        <img src={props.img2} alt={props.place} />
        <img src={props.img3} alt={props.place} />
      </article>
      <aside>
        <p>{props.desc}</p>
      </aside>
    </div>
  );
};

export default TravelBlog;
