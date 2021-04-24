import React, { useContext } from 'react';
import logo from "../logo.svg";
import BusySpinner from "./BusySpinner";
import {BusyContext} from "../App";

function MainPanel() {
    const { isBusy, setBusy } = useContext(BusyContext);

    const handleClick = (event) => {
        event.preventDefault();

        setBusy(true);

        const timeoutHandle = setTimeout(() => {
            setBusy(false);
            clearTimeout(timeoutHandle);
        }, 1500);
    };

    const content = (
            <>
                <img src={logo} className="App-logo" alt="logo"/>
                <button type='button' onClick={handleClick}>Cause busy</button>
            </>
        )
    ;
    const spinner = (<BusySpinner/>);

console.log('isBusy at render ', isBusy);
    return (
            <div className="App">
                <header className="App-header">
                    { isBusy
                        ? spinner
                        : content
                    }
                </header>
            </div>
    );
}
export default MainPanel;
