import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return(
  <BrowserRouter>
    <Routes>
        <Route path="/*" element={ <div> Error 404, Not Found. </div>}/>
        <Route path="/Home" element={<Home />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
