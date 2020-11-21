import React from "react";

const SkillsItem = ({ describe, icon, img, classes, name }) => {
  return (
    <div
      className={`card card__container ${
        icon ? icon.slice(icon.indexOf("-") + 1, icon.length) : classes
      }`}
    >
      <div className="card-body">
        <div className="card__flex">
          <p>{name}</p>
          {img ? (
            <img src={img} alt={classes} />
          ) : (
            <i className={"fab " + icon} />
          )}
        </div>
        <p className="card-text">{describe}</p>
      </div>
    </div>
  );
};
export default SkillsItem;
