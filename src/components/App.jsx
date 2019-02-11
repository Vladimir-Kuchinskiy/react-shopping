import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';

import NavBar from '../containers/NavBar';
import Filter from '../containers/Filter';
import BookCard from '../containers/BookCard';

import './app.css';

class App extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <NavBar />
        <Filter />
        <Card.Group itemsPerRow={4}>
          {isReady ? books.map(book => <BookCard key={book.id} book={book} />) : 'Loading...'}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
