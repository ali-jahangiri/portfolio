import React from "react";

const ToyItem = ({ desc, img, link }) => (
  <a href={link} className="toy__item col-md-4">
    <div className="col-9 m-auto">
      <img className="img-fluid" src={img} alt={desc} />
      <div>
        <p>{desc}</p>
      </div>
    </div>
  </a>
);

export default ToyItem;
