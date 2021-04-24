import React, {useContext} from 'react';
import {BusyContext} from "../App";

function PageB() {
    const {isBusy, setBusy, Spinner} = useContext(BusyContext);

    // Kill any unexpired delay
    setBusy(false);

    const content = (
        <div className="App-header">
            <h2>Page B</h2>
            <p>This page resets any context busy state.</p>
        </div>
    );

    return (
        <div className="App">
            <header className="App-header">
                { isBusy
                    ? <Spinner/>
                    : content
                }
            </header>
        </div>
    );
}

export default PageB;
