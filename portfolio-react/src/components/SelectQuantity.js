import React from "react";
import { useState } from "react";
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';

function SelectQuantity() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count === 10 ? count : count + 1);
    const decrement = () => setCount(count === 0 ? count: count - 1);
    return (
      <div>
        <HiMinusSm onClick={decrement} />
        <span>{count}</span>
        <HiPlusSm onClick={increment} />
      </div>
     );
}
	
export default SelectQuantity;