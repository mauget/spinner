import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BusySpinner() {
    return (
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
}
export default BusySpinner;
