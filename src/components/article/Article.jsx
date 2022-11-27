import React from "react";
import "./article.css";
const Article = ({ imageURL, date, title, text }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imageURL} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <p>{date}</p>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Article;
