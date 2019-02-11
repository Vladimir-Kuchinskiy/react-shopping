import React from 'react';
import { Button, Image, List } from 'semantic-ui-react';

const Cart = ({ items, removeFromCart }) => {
  if (items.length === 0) {
    return (
      <List selection divided verticalAlign="middle">
        Empty
      </List>
    );
  }

  return (
    <List selection divided verticalAlign="middle">
      {items.map(({ id, title, image }) => (
        <List.Item key={id}>
          <List.Content floated="right">
            <Button color="red" size="tiny" onClick={() => removeFromCart(id)}>
              Remove
            </Button>
          </List.Content>
          <Image avatar src={image} />
          <List.Content>{title}</List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default Cart;
