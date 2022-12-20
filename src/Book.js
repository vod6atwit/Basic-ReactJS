import React from 'react';

const Book = props => {
  const { img, title, author } = props.book;

  const clickHandler = e => {
    console.log(e.target);
    alert('Hello world');
  };
  const complexExample = author => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <br />
      <div className="button">
        <button type="button" onClick={clickHandler}>
          button
        </button>
        <button type="button" onClick={() => complexExample(author)}>
          complex button
        </button>
      </div>
    </article>
  );
};

export default Book;
