import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import SubHeader from "./components/SubHeader/SubHeader";
import Modal from "./components/Modal/Modal";
import ProductList from "./components/ProductList/ProductList";
import Pagination from "./components/Pagination/Pagination";

function App() {
  return (
    <div className="app" data-testid="app-test">
      <Modal />
      <Header />
      <SubHeader />
      <main className="app__content">
        <Sidebar />
        <ProductList />
      </main>
      <Pagination />
    </div>
  );
}

export default App;
