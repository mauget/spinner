import React, {useContext} from 'react';
import {BusyContext} from "../App";

function PageA() {
    const {isBusy, Spinner} = useContext(BusyContext);

    const content = (
        <div className="App-header">
            <h2>Page A</h2>
            <p>This page honors the context busy state.</p>
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

export default PageA;
