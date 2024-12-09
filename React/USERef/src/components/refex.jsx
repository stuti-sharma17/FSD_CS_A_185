import { useRef } from 'react';

const Refex = () => {
    const a = 5;
    const refCount = useRef(0);

    console.log("Object Rendered");

    function handleRef() {
        refCount.current += 1; // Increment the refCount
        console.log("REFCOUNT: " + refCount.current);
        
        if (refCount.current === a) {
            alert("Counter: " + refCount.current); // Corrected alert
        }
    }

    return (
        <div>
            <h1>RefCount: {refCount.current}</h1>
            <button onClick={handleRef}>Increment</button>
            <p>{a}</p>
        </div>
    );
}

export default Refex;