import React, {useState} from "react";
import './App.css';
import MainPanel from "./components/MainPanel";

const BusyContext = React.createContext(null);
export { BusyContext };

export default function App() {
    // Provider exposes isBusy and setBusy to any useContext consumer:
    const [isBusy, setBusy] = useState(false);
    const { Provider } = { ...BusyContext }

    // Provider "provides" the isBusy state to downStream useContext consumers
    return (
        <Provider value={{ isBusy, setBusy }}>
            <MainPanel/>
        </Provider>
    );
}
