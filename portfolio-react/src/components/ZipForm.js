import React, { useState } from "react";

function ZipSearch() {
    const [zipCode, zipSearch] = useState("");
    return (
        <div>
            <header>
                <form>
                    <fieldset>
                        <legend>Zip Code Form</legend>
                        <label>Please enter your zip code:
                            <input type="text" value={zipCode}
                                onChange={e => zipSearch(e.target.value)} />
                        </label>
                    </fieldset>
                    <button onClick={e => {
                        zipSearch(e.target.value);
                        alert(`Your zip code is: ${zipCode}`);
                        e.preventDefault();
                    }}>Submit</button>
                </form>
            </header>
        </div>
    )
}

export default ZipSearch