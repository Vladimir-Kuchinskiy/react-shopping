import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

const Filter = ({ filter, setFilter, searchQuery, setSearchQuery }) => {
  return (
    <Menu secondary>
      <Menu.Item name="all" active={filter === 'all'} onClick={() => setFilter('all')} />
      <Menu.Item
        name="priceHigh"
        active={filter === 'priceHigh'}
        onClick={() => setFilter('priceHigh')}
      />
      <Menu.Item
        name="priceLow"
        active={filter === 'priceLow'}
        onClick={() => setFilter('priceLow')}
      />
      <Menu.Item name="author" active={filter === 'author'} onClick={() => setFilter('author')} />
      <Menu.Item position="right">
        <Input
          placeholder="Search for a book..."
          icon="search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </Menu.Item>
    </Menu>
  );
};

export default Filter;
