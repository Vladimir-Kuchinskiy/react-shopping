import React from 'react';
import { Menu, Popup } from 'semantic-ui-react';
import Cart from '../containers/Cart';

const NavBar = ({ totalPrice, itemsCount }) => {
  return (
    <Menu>
      <Menu.Item name="browse">Books Shop</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item name="signup">
          Total &nbsp; <b>${totalPrice}</b>
        </Menu.Item>

        <Popup
          trigger={
            <Menu.Item name="help">
              Cart (<b>{itemsCount}</b>)
            </Menu.Item>
          }
          content={<Cart />}
          on="click"
          hideOnScroll
        />
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
