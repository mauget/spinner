import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home";
import PageA from "./PageA";
import PageB from "./PageB";

function Router() {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/pagea">Page A</Link>
                    </li>
                    <li>
                        <Link to="/pageb">Page B</Link>
                    </li>
                </ul>

                <hr/>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/pagea">
                        <PageA/>
                    </Route>
                    <Route path="/pageb">
                        <PageB/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
export default Router;
