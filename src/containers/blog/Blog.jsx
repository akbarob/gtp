import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";

const blogImg = [blog02, blog03, blog04, blog05];
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article
              imageURL={blog01}
              date="Dec-31-2022"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              text="Read Full Article"
            />
          </div>
          <div className="gpt3__blog-container_groupB">
            {blogImg.map((item) => (
              <Article
                imageURL={item}
                date="Dec-31-2022"
                title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                text="Read Full Article"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
