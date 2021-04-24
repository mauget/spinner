import React, { useContext } from 'react';
import logo from "../logo.svg";
import {BusyContext} from "../App";

const FAKE_DELAY_SECONDS = 10;
const MILLSEC = 1000;

function Home() {
    const { isBusy, setBusy, Spinner } = useContext(BusyContext);

    const handleClick = (event) => {
        event.preventDefault();

        setBusy(true);

        setTimeout(() => {
            setBusy(false);
        }, FAKE_DELAY_SECONDS * MILLSEC);
    };

    const content = (
            <>
                <h1>Home</h1>
                <img src={logo} className="App-logo" alt="logo"/>
                <p>{`Click the button to trigger a ${FAKE_DELAY_SECONDS}-second busy spinner`}</p>
                <p>Navigation to Page A will show a spinner for any unexpired delay.</p>
                <p>Navigation to Page B will expire any remaining delay.</p>
                <button type='button' onClick={handleClick}>Cause busy</button>
            </>
        )
    ;

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
export default Home;
