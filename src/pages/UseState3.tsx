import { useState } from "react";

function UseState3(){

    const [count,setCount] = useState(0)

    function handleCombine(){
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
    }

    function handleSeperate(){
        setCount((count) => count+1)
        setCount((count) => count+1)
        setCount((count) => count+1)
    }

    return(
        <div>
            <div className="flex flex-col">
                <button onClick={handleCombine} className="border w-fit">+1</button>
                <button onClick={handleSeperate} className="border w-fit">+3</button>
            </div>
            <p>{count}</p>
        </div>
    )
}

export default UseState3;