import React, { useEffect } from 'react';
import Loading from './Loading';

function App() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = 'https://archive81.sa.com/';
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
