import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart";
import { ErrorPage } from "./Components/ErrorPage";
import Header from "./Components/Header";
import Product from "./Components/Product";

function App() {
  const [products, setProduct] = useState([]);
  const [loading,setLoading] =useState(false)
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProduct(data);
        setLoading(true)
        console.log(data);
      } catch (error) {
        setLoading(false)
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Product products={products} loading={loading} />} />
        <Route path="/cart" element={<Cart products={products} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
