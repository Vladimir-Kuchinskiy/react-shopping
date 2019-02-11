import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

const BookCard = props => {
  const { title, author, price, image } = props.book;
  return (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div>
          <Icon name="usd" />
          {price}
        </div>
      </Card.Content>
      <Button onClick={() => props.addToCart(props.book)} positive>
        Add to cart {props.addedCount > 0 && `(${props.addedCount})`}
      </Button>
    </Card>
  );
};

export default BookCard;
