import React from "react";

const ToyItem = ({ desc, img, link }) => (
  <a href={link} className="toy__item col-md-4">
    <img className="img-fluid" src={img} alt={desc} />
    <div>
      <p>{desc}</p>
    </div>
  </a>
);

export default ToyItem;
