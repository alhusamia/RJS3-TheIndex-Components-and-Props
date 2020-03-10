import React from "react";
import AuthorCard from "./AuthorCard";

function AuthorList (props) {
    const authors = props.authors;
  const authorCards = authors.map(author => (
    <AuthorCard key={author.first_name + author.last_name} author={author} />
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{authorCards}</div>
    </div>
  );
};

export default AuthorList;