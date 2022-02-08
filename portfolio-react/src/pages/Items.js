import React from 'react';
import GroceryTable from '../components/ItemTable';
import items from '../data/items';

function Items() {
    return (
        <article>
            <h2>Here are some of our available items</h2>
            <p>You can choose the quantities by pressing on the + or - buttons</p>
            <GroceryTable items={items} />
        </article>
    )
}

export default Items