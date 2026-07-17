import { Routes, Route, Link } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { GrGift } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi2";
import AdminProductsPage from "./admin/adminProductPage";

export default function AdminPage() {
  return (
    <div className="w-full h-full bg-primary flex">
      <div className="w-[300px] h-full bg-white flex flex-col shadow-2xl">
        <div className="w-full h-[100px] py-4 px-2">
          <img src="/logo.png" className="h-full" />
        </div>

        <Link to="/admin" className="w-full p-4 text-xl text-gray-500 flex items-center gap-4">
          <FiShoppingCart />
          <span className="w-full h-full block py-2">Orders</span>
        </Link>

        <Link to="/admin/products" className="w-full p-4 text-xl text-gray-500 flex items-center gap-4" >
          <GrGift />
          <span className="w-full h-full block py-2">Products</span>
        </Link>

        <Link to="/admin/users" className="w-full p-4 text-xl text-gray-500 flex items-center gap-4">
          <HiOutlineUsers />
          <span className="w-full h-full block py-2">Users</span>
        </Link>
      </div>

      <div className="w-[calc(100%_-_300px)] h-full p-4">
        <Routes>
          <Route path="" element={<h1>Orders Page</h1>} />
          <Route path="products" element={<AdminProductsPage />}/>
          <Route path="users" element={<h1>Users Page</h1>}/>

        </Routes>
      </div>
    </div>
  );
}