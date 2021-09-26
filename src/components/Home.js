import React, { useState, useEffect } from "react";

import Count from "../utilities/Count";
import List from "../utilities/List";
import BarChart from "../utilities/BarChart";
import ghostApi from "../apis/ghostApi";
import "../styles/App.css";

const Home = () => {
  const [postCount, setPostCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [authorCount, setAuthorCount] = useState(0);
  const [tagCount, setTagCount] = useState(0);
  const [newPosts, setNewPosts] = useState([]);
  const [availablePosts, setAvailablePosts] = useState([]);

  useEffect(() => {
    //Number of posts
    const pages = async () => {
      const response = await ghostApi.get("posts/");
      setPostCount(response.data.posts.length);
    };

    //Number of posts
    const posts = async () => {
      const response = await ghostApi.get("pages/");
      setPageCount(response.data.pages.length);
    };

    //Number of Authors
    const authors = async () => {
      const response = await ghostApi.get("authors/");
      setAuthorCount(response.data.authors.length);
    };

    //Number of Tags
    const tags = async () => {
      const response = await ghostApi.get("tags/");
      setTagCount(response.data.tags.length);
    };

    //Latest 5 Posts
    const newPostsList = async () => {
      const response = await ghostApi.get("posts/", {
        params: {
          order: "published_at DESC",
          limit: 5,
          include: "authors",
        },
      });
      setNewPosts(response.data.posts);
    };

    //All Posts
    const allPages = async () => {
      const response = await ghostApi.get("posts/");
      setAvailablePosts(response.data.posts);
    };
    pages();
    posts();
    authors();
    tags();
    newPostsList();
    allPages();
  }, []);

  return (
    <div className="container my-5 homeContainer">
      <div className="row ">
        <div className="col-xs-12 col-sm-6 ">
          <Count cardTitle={"Total Number of Posts"} cardValue={postCount} />
        </div>
        <div className="col-xs-12 col-sm-6">
          <Count cardTitle={"Total Number of Pages"} cardValue={pageCount} />
        </div>
      </div>
      <div className="row ">
        <div className="col-xs-12 col-sm-6">
          <Count
            cardTitle={"Total Number of Authors"}
            cardValue={authorCount}
          />
        </div>
        <div className="col-xs-12 col-sm-6">
          <Count cardTitle={"Total Number of Tags"} cardValue={tagCount} />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <List
            listTitle={"Latest Five Published Posts"}
            listValue={newPosts}
          />
        </div>
        <div className="col-xs-12 col-sm-6">
          <BarChart barTitle={"Posts per Month"} barValue={availablePosts} />
        </div>
      </div>
    </div>
  );
};

export default Home;
