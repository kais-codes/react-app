import React from "react";
import StoreTable from "../components/StoreTable";
import ZipSearch from "../components/ZipForm";
import stores from '../data/stores'

function StorePage() {
    return (
        <article>
            <h2>These are our other store locations</h2>
            <p>Check out the locations or enter your zip code in the form below</p>
            <StoreTable stores={stores}/>
            <ZipSearch />
        </article>
    )
}

export default StorePage