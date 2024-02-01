import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  MenuPage,
  MyOrderPage,
  OfferPage,
} from "./pages/pages.index";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/offer" element={<OfferPage />} />
          <Route path="/order" element={<MyOrderPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
