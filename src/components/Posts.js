import React, { useState, useEffect } from "react";
import List from "../utilities/List";
import ghostApi from "../apis/ghostApi";

const Posts = () => {
  const [availablePosts, setAvailablePosts] = useState([]);

  useEffect(() => {
    //All Posts
    const allPages = async () => {
      const response = await ghostApi.get("posts/", {
        params: {
          formats: ["plaintext"],
          include: "authors",
        },
      });
      setAvailablePosts(response.data.posts);
    };
    allPages();
  }, []);

  const allPosts = availablePosts.map((e) => e);

  // Posts that are without Meta Description
  const withoutMetaDes = allPosts.filter((e) => !e.meta_description);

  //too long Meta Description Posts
  const longMetaDes = allPosts.filter((e) => {
    return e.meta_description && e.meta_description.length > 100 ? true : false;
  });

  //Too Long URL posts
  const longURL = allPosts.filter((e) => (e.url.length > 100 ? true : false));

  //Posts without featured image
  const wuthoutFeaturedImg = allPosts.filter((e) => !e.feature_image);

  //Too Short posts
  const shortPosts = allPosts.filter((e) => {
    const arrLength = e.plaintext.split(/\s+/g).length;
    return arrLength < 250 ? true : false;
  });
  //Too Long Posts
  const longPosts = allPosts.filter((e) => {
    const arrLength = e.plaintext.split(/\s+/g).length;
    return arrLength > 1500 ? true : false;
  });

  return (
    <div className="container my-5 homeContainer">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <List
            listTitle={"Posts without MetaDescription"}
            listValue={withoutMetaDes}
          />
        </div>
        <div className="col-xs-12 col-sm-6">
          <List
            listTitle={"Posts with too long MetaDescription"}
            listValue={longMetaDes}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <List
            listTitle={"Posts with URL more than 100-chars"}
            listValue={longURL}
          />
        </div>
        <div className="col-xs-12 col-sm-6">
          <List
            listTitle={"Posts without Featured Image"}
            listValue={wuthoutFeaturedImg}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <List listTitle={"Too Short Posts"} listValue={shortPosts} />
        </div>
        <div className="col-xs-12 col-sm-6">
          <List listTitle={"Too Long Posts"} listValue={longPosts} />
        </div>
      </div>
    </div>
  );
};

export default Posts;
