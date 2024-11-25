import '../style/Test/test.css';
import { useState } from 'react';

const Test = () => {

    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number +1)
    }

    const decrement = () => {
        setNumber(number - 1)
    }

    const reset = () => {
        setNumber(0)
    }

    return (
        <div className="test-wrapper">
            <section className="test-container">
                <h1 className="number">{number}</h1>
                <section className="button-container">
                    <button onClick={() => increment()}>Increment</button>
                    <button onClick={() => reset()}>Reset</button>
                    <button onClick={() => decrement()}>Decrement</button>
                </section>
            </section>
        </div>
    )
}

export default Test;