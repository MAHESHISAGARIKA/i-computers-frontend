import { Routes, Route,Link } from "react-router";

export default function AdminPage() {
  return (
    <div className="w-full h-full bg-purple-500 flex">
      <div className="w-[300px] h-full bg-white flex flex-col">
        <h1 className="w-full h-[50px] bg-gray-400 text-center text-xl font-bold">Using Anchor Tags</h1>
           <a className="w-[100px] h-[50px] bg-blue-500 my-3" href="/admin/">Orders</a>
           <a className="w-[100px] h-[50px] bg-blue-500 my-3" href="/admin/products">Products</a>
           <a className="w-[100px] h-[50px] bg-blue-500 my-3" href="/admin/users">Users</a>

        <h1 className="w-full h-[50px] bg-gray-400 text-center text-xl font-bold">Using link component</h1>
           <Link className="w-[100px] h-[50px] bg-blue-500 my-3" to="/admin/">Orders</Link>
           <Link className="w-[100px] h-[50px] bg-blue-500 my-3" to="/admin/products">Products</Link>
           <Link className="w-[100px] h-[50px] bg-blue-500 my-3" to="/admin/users">Users</Link> 
    
      </div>

      <div className="w-[calc(100%-300px)] h-full bg-amber-200">
        <Routes>
          <Route path="/" element={<h1>Orders page</h1>} />
          <Route path="/products" element={<h1>Products page</h1>} />
          <Route path="/users" element={<h1>Users Page</h1>} />
        </Routes>
      </div>
    </div>
  );
}