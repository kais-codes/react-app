import React from "react";
import StoreRow from "./StoreRow";


function StoreTable ({stores}) {
    return (
        <table className="centered">
            <caption>Our Other Stores</caption>
            <thead> 
                <tr>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                </tr>
            </thead>
            <tbody>
                {stores.map((store, i) => <StoreRow store={store} key={i} />)}
            </tbody>
        </table>
    )
}

export default StoreTable;