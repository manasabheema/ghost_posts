import React from "react";

const Count = ({ cardTitle, cardValue }) => {
  return (
    <div
      className="card h-250 bgCard m-2"
      style={{ width: "auto", minWidth: "250px" }}
    >
      <div className="card-body">
        <h5 className="card-title text-center text-warning ">
          <i className="fal fa-calculator"></i>&nbsp;&nbsp;
          {cardTitle}
        </h5>
        <p className="card-text text-center display-4 bg-light border border-secondary rounded-2 py-3">
          {cardValue}
        </p>
      </div>
    </div>
  );
};
export default Count;
