import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const List = ({ listTitle, listValue }) => {
  var posts;
  if (listValue.length > 0) {
    posts = listValue.map((post) => {
      return (
        <li key={post.id} className="list-group-item rounded-0">
          <div className="row">
            <div className="col-10 text-nowrap text-truncate">{post.title}</div>
            <div className="col-2">
              <Router>
                <Link target={"_blank"} to={{ pathname: post.url }}>
                  <i class="fad fa-external-link"></i>
                </Link>
              </Router>
            </div>
          </div>
          <div className="row text-info">
            <div className="col">{`Author : ${post.authors[0].name}`}</div>
          </div>
        </li>
      );
    });
  } else {
    posts = (function () {
      return <h1>No Posts in this Category</h1>;
    })();
  }

  return (
    <div
      className="card h-480 bgCard m-2 bigCard"
      style={{ width: "auto", minWidth: "250px" }}
    >
      <div className="card-body">
        <h5 className="card-title text-warning  text-center">
          <i className="fal fa-clipboard-list-check"></i>&nbsp;&nbsp;
          {listTitle}
        </h5>
        <div className="card-text overflow-auto listBody">
          {listValue.length > 0 ? (
            <ul className="list-unstyled list-group ">{posts}</ul>
          ) : (
            <div className="text-center emptyText rounded-2 bg-light d-flex justify-content-center align-items-center align-self-center">
              {posts}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default List;
