import React from "react";
import SelectQuantity from './SelectQuantity';

function ItemRow({item}) {
    return (
        <tr>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td><SelectQuantity /></td>
        </tr>
    )
}

export default ItemRow;