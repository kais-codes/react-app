import React from "react";
import ItemRow from './ItemRow';

function ItemTable ({items}) {
    return (
        <table className="centered">
            <caption>Items for Sale</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => <ItemRow item={item} key={i} />)}
            </tbody>
        </table>
    )
}

export default ItemTable