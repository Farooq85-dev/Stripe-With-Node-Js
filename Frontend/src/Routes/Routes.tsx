import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "../Pages/Cart";
import SuccessPage from "../Pages/Success";
import CancelPage from "../Pages/Cancel";

function RoutesComp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CartPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComp;
