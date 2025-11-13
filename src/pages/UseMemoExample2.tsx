import { useEffect, useMemo, useState } from "react";
import axios from "axios";

// Using a placeholder API for demonstration
const FAKE_API_URL = "https://fakestoreapi.com/products?limit="; 

export default function UseMemoExample2() {
  const [data, setData] = useState<any[]>([]);
  const [count, setCount] = useState(5); 
  const [inputNumber, setInputNumber] = useState(5); 

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetched = await axios.get(`${FAKE_API_URL}${count}`);
        setData(fetched.data);
        console.log("API fetched");
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [count]);

  
  const croppedList = useMemo(() => {
    console.log("-----------------------------------------");
    console.log("memoized function: croppedList calculation");
    
    // *** FEATURE ADDED: SIMULATE A HEAVY CALCULATION ***
    // This intentionally blocks the thread for 500ms to make the delay noticeable.
    let start = performance.now();
    while (performance.now() - start < 500) {
      // Blocking the thread to simulate a CPU-intensive task (like complex sorting/filtering)
    }
    console.log(`Calculation finished in: ${(performance.now() - start).toFixed(2)}ms`);
    // *** END SIMULATION ***
    
    return data.slice(0, count)
  }, [data, count]); // useMemo only re-runs when data or count changes

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Changing inputNumber causes a component re-render.
    // However, since data and count haven't changed, useMemo will skip the slow calculation.
    setInputNumber(Number(e.target.value));
  };

  const handleSubmit = () => {
    // Changing count causes useMemo to re-run the slow calculation.
    setCount(inputNumber); 
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">⚛️ useMemo Demonstration</h2>
      <div className="mb-4 p-3 border rounded">
        <label htmlFor="itemCount" className="block mb-1">Items to show (max: {data.length}):</label>
        <input
          id="itemCount"
          type="number"
          value={inputNumber}
          onChange={handleChange}
          max={data.length}
          min={0}
          className="p-1 border rounded w-32"
        />
        <button 
          onClick={handleSubmit} 
          className="ml-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Show
        </button>
        <p className="text-sm mt-2">
          **Type in the input field:** Should be **instant** because useMemo skips the heavy calculation.
          <br/>
          **Click Show:** Will cause a **noticeable 500ms delay** because the calculation is forced to re-run.
        </p>
      </div>

      <h4 className="text-lg font-semibold mt-4 mb-2">Displayed Products ({croppedList.length}):</h4>
      <ul>
        {croppedList.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}