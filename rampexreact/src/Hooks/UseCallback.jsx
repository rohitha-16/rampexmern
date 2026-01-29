import React, { useState, useCallback } from 'react'
import Header from '../component/Header';

const UseCallback = () => {
    const [Count, setCount] = useState(0);
    const [increment, setIncrement] = useState(1);

    const handleIncrement = useCallback(() => {
        setCount(Count + increment);
        console.log("Count incremented by:", increment);
    }, [Count, increment]);

    return (
        <div style={{ padding: '20px' }}>
            <Header />
            <h1>UseCallback Demo</h1>
            <h2>Count: {Count}</h2>
            <div>
                <label>Increment by: </label>
                <input 
                    type="number" 
                    value={increment} 
                    onChange={(e) => setIncrement(Number(e.target.value))}
                    style={{ marginLeft: '10px', padding: '5px' }}
                />
            </div>
            <button 
                onClick={handleIncrement}
                style={{ padding: '10px 20px', marginTop: '10px' }}
            >
                Increment
            </button>
        </div>
    )
}

export default UseCallback
