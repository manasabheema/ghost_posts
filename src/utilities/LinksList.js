import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const LinksList = ({ listTitle, listValue }) => {
  var links;
  if (listValue.length > 0) {
    links = listValue.map((link) => {
      return (
        <li key={link} className="list-group-item rounded-0">
          <div className="row">
            <div className="col-10 text-nowrap text-truncate">{link}</div>
            <div className="col-2">
              <Router>
                <Link target={"_blank"} to={{ pathname: link }}>
                  <i className="fal fa-unlink"></i>
                </Link>
              </Router>
            </div>
          </div>
        </li>
      );
    });
  } else {
    links = (function () {
      return <h1>No Links in this Category</h1>;
    })();
  }

  return (
    <div
      className="card h-480 bgCard m-2 bigCard"
      style={{ width: "auto", minWidth: "250px" }}
    >
      <div className="card-body">
        <h5 className="card-title text-warning  text-center">
          <i className="fal fa-link"></i>&nbsp;&nbsp;
          {listTitle}
        </h5>
        <div className="card-text overflow-auto listBody">
          {listValue.length > 0 ? (
            <ul className="list-unstyled list-group ">{links}</ul>
          ) : (
            <div className="text-center emptyText rounded-2 bg-light d-flex justify-content-center align-items-center align-self-center">
              {links}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default LinksList;
