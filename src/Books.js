import React from "react";
import PropTypes from "prop-types";

function Books({
  id,
  title,
  author,
  publisher,
  pubDate,
  priceStandard,
  priceSales,
  cover,
  link
}) {
  return (
    <div className="book">
      <img src={cover} alt={title} title={title}></img>
      <div className="book__data">
        <div className="book__header">
          <p className="book__title">{title}</p>
          <p className="book__author">
            {author}&nbsp;
            {publisher}&nbsp;
            {pubDate}
          </p>
        </div>
        <div className="book__price">
          <p className="book__pricestandard">
            <span>정상가</span>
            {priceStandard}
          </p>
          <p className="book__pricesales">
            <span>할인가</span>
            {priceSales}
          </p>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="book__buy">구매하러 가기</div>
        </a>
      </div>
    </div>
  );
}

Books.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  pubDate: PropTypes.string.isRequired,
  priceStandard: PropTypes.number.isRequired,
  priceSales: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Books;
