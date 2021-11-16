import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import SubHeader from "./components/SubHeader/SubHeader";
import Modal from "./components/Modal/Modal";
import ProductList from "./components/ProductList/ProductList";
import { products } from "./fakeData";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const productsLocal = JSON.parse(localStorage.getItem("products"));
    if (!productsLocal) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, []);
  return (
    <div className="app">
      <Modal />
      <Header />
      <SubHeader />
      <main className="app__content">
        <Sidebar />
        <ProductList />
      </main>
    </div>
  );
}

export default App;
