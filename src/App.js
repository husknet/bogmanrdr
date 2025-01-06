import React, { useEffect } from 'react';
import Loading from './Loading';

function App() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = 'https://poon.evoluciondigitalia.cl/';
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            <Loading />
        </div>
    );
}

export default App;
