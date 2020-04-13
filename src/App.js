import React from "react";
import books from "./books.json";
import Books from "./Books";
import "./App.css";

class App extends React.Component {
  state = {
    Loading: true,
    books: []
  };

  render() {
    const { Loading, books } = this.state;
    return (
      <section className="container">
        {Loading ? (
          <div className="loader">
            <span className="loader__text">로딩중 ᕙ༼ ≖ᴥ≖༽ᕗ </span>
          </div>
        ) : (
          <div className="books">
            {books.map(book => {
              return (
                <Books
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  publisher={book.publisher}
                  pubDate={book.pubDate}
                  priceStandard={book.priceStandard}
                  priceSales={book.priceSales}
                  cover={book.cover}
                  link={book.link}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ books: books.item, Loading: false });
    }, 3000);
  }
}

export default App;
