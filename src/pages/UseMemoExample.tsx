import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function UseMemoExample() {
  const [data, setData] = useState<any[]>([]);
  const [count, setCount] = useState(5); 
  const [inputNumber, setInputNumber] = useState(5); 

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetched = await axios.get(`https://fakeapi.net/products?limit=${count}`);
        setData(fetched.data.data);
        console.log("API fetched")
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [count]);

  
  const croppedList = useMemo(() => {
    console.log("memoized function")
    return data.slice(0, count)
  }, [data, count]);

  const handleChange = (e: any) => {
    setInputNumber(e.target.value);
  };

  const handleSubmit = () => {
    setCount(inputNumber); 
  };

  return (
    <div className="p-5">
      <input
        type="number"
        value={inputNumber}
        onChange={handleChange}
        max={data.length}
      />
      <button onClick={handleSubmit} className="ml-2">
        Show
      </button>

      <ul>
        {croppedList.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

