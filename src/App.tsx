import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listagem from "./pages/Listing";
import ProductPage from "./pages/productPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Listagem" element={<Listagem />} />
        <Route path="/MeusAnuncios" element={<div>Meus Anuncios</div>} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/*" element={<div>Error 404, Not Found.</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
