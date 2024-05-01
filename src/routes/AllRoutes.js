import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsList, ProductDetail, Login, Register, CartPage } from "../pages";
import { Protected } from "./Protected";
import { OrderSummary } from "../pages/Cart/components/OrderSummary";
import { DashbaordPage } from "../pages/Dashboard/DashbaordPage";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:id" element={<ProductDetail />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="summary" element={<Protected><OrderSummary /></Protected> } />
        <Route path="/dashboard" element={<Protected><DashbaordPage /></Protected> } />
        <Route path="cart" element={<Protected><CartPage /></Protected>} />
    </Routes>
    </>
  )
}
