import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetAllCarts, GetUser } from "../../service/DataService";
import { useCart } from "../../context/CartContext"

export const DropdownLoggedIn = ({setDropdown}) => {
    const { cartList, clearCart, total } = useCart();
    const navigate = useNavigate();
  const [userData,setUserData] = useState({});

    useEffect(() => {
        async function user() {
            try{
                const data = await GetUser();
                setUserData(data)    
            }catch(error){
                console.log(error);
            }
        };
        user();
    } ,[]);

    function handleLogout(){
        async function CartUpdate() {
            const cbid = JSON.parse(sessionStorage.getItem("cbid"));
            const cart = {
                id: cbid,
                current: cartList,
                total_amount: total
            };
            const token = JSON.parse(sessionStorage.getItem("token"));
            
            // Fetch all carts
            const carts = await GetAllCarts();
            
            // Find the cart with the matching ID
            const existingCart = carts.find(cart => cart.id === cbid);
            
            if (existingCart) {
                // Update the existing cart
                const response = await fetch(`http://localhost:8000/660/carts/${cbid}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                    body: JSON.stringify(cart)
                });
        
                if (!response.ok) {
                    throw new Error(`Failed to update cart! Status: ${response.status}`);
                }
            } else {
                // Create a new cart
                const createResponse = await fetch(`http://localhost:8000/660/carts`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                    body: JSON.stringify(cart)
                });
        
                if (!createResponse.ok) {
                    throw new Error(`Failed to create cart! Status: ${createResponse.status}`);
                }
            }
        }
        
        CartUpdate();
        clearCart();
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("cbid");
        setDropdown(false);
        navigate("/");
    }

  return (
    <div id="dropdownAvatar" className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div className="font-medium truncate">{userData.name}</div>
        </div>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
                <Link onClick={() => setDropdown(false)} to="/products" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
            </li>
            <li>
                <Link onClick={() => setDropdown(false)} to="/dashboard" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
        </ul>
        <div className="py-1">
            <span onClick={handleLogout} className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</span>
        </div>
    </div>
  )
}
