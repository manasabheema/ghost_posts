import React, { useState, useEffect } from "react";
import LinksList from "../utilities/LinksList";
import ghostApi from "../apis/ghostApi";
import Count from "../utilities/Count";
import "../styles/App.css";

const Pages = () => {
  const [availablePosts, setAvailablePosts] = useState([]);

  useEffect(() => {
    //All Posts
    const allPages = async () => {
      const response = await ghostApi.get("posts/", {
        params: {
          formats: ["plaintext"],
          include: ["authors", "tags"],
        },
      });
      setAvailablePosts(response.data.posts);
    };
    allPages();
  }, []);

  const allPosts = availablePosts.map((e) => e);

  // Posts that are without Meta Description
  var allLinks = [];
  allPosts.forEach((e) => {
    if (e.feature_image && !allLinks.includes(e.feature_image)) {
      allLinks.push(e.feature_image);
    }
    if (
      e.tags.length > 0 &&
      e.tags[0].url &&
      !allLinks.includes(e.tags[0].url)
    ) {
      allLinks.push(e.tags[0].url);
    }
    if (
      e.authors &&
      e.authors[0].profile_image &&
      !allLinks.includes(e.authors[0].profile_image)
    ) {
      allLinks.push(e.authors[0].profile_image);
    }
    if (e.authors && e.authors[0].url && !allLinks.includes(e.authors[0].url)) {
      allLinks.push(e.authors[0].url);
    }
    if (
      e.primary_author &&
      e.primary_author.profile_image &&
      !allLinks.includes(e.primary_author.profile_image)
    ) {
      allLinks.push(e.primary_author.profile_image);
    }
    if (
      e.primary_author &&
      e.primary_author.url &&
      !allLinks.includes(e.primary_author.url)
    ) {
      allLinks.push(e.primary_author.url);
    }
    if (
      e.primary_tag &&
      e.primary_tag.url &&
      !allLinks.includes(e.primary_tag.url)
    ) {
      allLinks.push(e.primary_tag.url);
    }
    if (e.url && !allLinks.includes(e.url)) {
      allLinks.push(e.url);
    }
  });


  // Links Starting String
  const startUrl = "https://ghost-blog.ipxp.in/";
  //Internal Links
  const internalLinks = allLinks.filter((e) => {
    return e.slice(0, 27) === startUrl ? true : false;
  });
  //External Links
  const externalLinks = allLinks.filter((e) => {
    return e.slice(0, 27) !== startUrl ? true : false;
  });

  return (
    <div className="container my-5 homeContainer">
      <div className="row">
        <div className="col-md-4">
          <Count cardTitle={"Available Links"} cardValue={allLinks.length} />
        </div>
        <div className="col-md-4">
          <Count
            cardTitle={"External Links"}
            cardValue={externalLinks.length}
          />
        </div>
        <div className="col-md-4">
          <Count
            cardTitle={"Internal Links"}
            cardValue={internalLinks.length}
          />
        </div>
      </div>
      <div className="row pagesDis">
        <div className="col-xs-12 col-sm-6">
          <LinksList
            listTitle={"External Broken Links"}
            listValue={externalLinks}
          />
        </div>
        <div className="col-xs-12 col-sm-6">
          <LinksList
            listTitle={"Internal Broken Links"}
            listValue={internalLinks}
          />
        </div>
      </div>
    </div>
  );
};

export default Pages;
