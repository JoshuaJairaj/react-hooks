import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export default function UseMemoExample2() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");
  const [sortType, setSortType] = useState<string>("none");

  const [theme, setTheme] = useState<"light" | "dark">("light"); 

  // Fetch products
  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching api")
      const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
      setProducts(response.data);
    };

    fetchData();
  }, []);

  const filteredProducts = useMemo(() => {
  console.log("Expensive calculation running...");

  let result = [...products];

  if (search.trim() !== "") {
    result = result.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category !== "all") {
    result = result.filter((item) => item.category === category);
  }

  if (sortType === "low-high") {
    result = [...result].sort((a, b) => a.price - b.price);
  } else if (sortType === "high-low") {
    result = [...result].sort((a, b) => b.price - a.price);
  }

  return result;
}, [products, search, category, sortType]);


  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h2>Product Dashboard</h2>

      
      <button
        className="border p-2"
        onClick={() => setTheme(prev => (prev === "light" ? "dark" : "light"))}
        style={{ marginBottom: "20px" }}
      >
        Toggle Theme ({theme === "light" ? "Switch to Dark" : "Switch to Light"})
      </button>

      <br />

      
      <input
      className="border"
        placeholder="Search product..."
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      />

      
      <select
      className="border p-1"
        value={category}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
      </select>

      
      <select
        className="border p-1"
        value={sortType}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setSortType(e.target.value)}
      >
        <option value="none">No Sort</option>
        <option value="low-high">Price: Low → High</option>
        <option value="high-low">Price: High → Low</option>
      </select>

      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>
            {p.title} ---- ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
