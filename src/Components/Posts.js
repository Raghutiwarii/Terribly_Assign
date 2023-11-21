import React from "react";
import "./profile.css";
import { FaThumbsUp } from "react-icons/fa";

const Posts = () => {
  const myPosts = [
    {
      title: "A changing world order",
      myPostcontent:
        "The world is changing at feverish pace. Friends, colleagues, and everyone engaged in knowledge work, are beginning to sense this, including ...",
      liked: true,
      date: "August 2",
      readingtime: "2",
      views: "102",
      category: "musing",
    },
    {
      title: "India v/s Australia",
      myPostcontent:
        "Think about it - this cricket series was akin to therapy.\n \n Laying our childhood trauma up top, working with it slowly and surely over two m...",
      liked: true,
      date: "January 21",
      readingtime: "1",
      views: "156",
      category: "thoughts",
    },
    {
      title: "Write to build",
      myPostcontent:
        "Writing is the first step to create: \n\n - stories \n - products \n - companies",
      liked: true,
      date: "November 18",
      readingtime: "1",
      views: "228",
      category: "thoughts",
    },
  ];

  return (
    <div>
      <div className="container">
        <br></br>
        <h4 className="custom-heading"> 134 Posts</h4>
        <hr className="custom-hr" />
        {myPosts.map((myPost, index) => {
          return (
            <div className="border-bottom py-4" key={index}>
              <div className="d-flex justify-content-between mb-2">
                <div
                  className="font-weight-bold text-lg" style={{ fontSize: "20px" }} >
                  {myPost.title}
                </div>
                <div className="d-flex align-items-center">
                  <FaThumbsUp className={`cursor-pointer text-sm`}
                    style={{ color: "#ffc87c" }} />
                </div>
              </div>
              <div className="my-6">
                <div style={{ whiteSpace: "pre-line" }}>{myPost.myPostcontent}</div>
              </div> <br />
              <div className="d-flex flex-column flex-md-row justify-content-between text-md-end">
                <div className="font-weight-semibold" style={{ color: "grey" }}>
                  <span style={{ color: "teal" }}>{myPost.category}</span> by{" "}
                  {"@tinytales"}
                </div>
                <div style={{ color: "grey" }}>
                  {myPost.date} &middot; {myPost.readingtime} mins Read &middot;{" "} {myPost.views} Views
                </div>
              </div>
            </div>
          );
        })}
      </div> 
    </div>
  );
};
export default Posts;