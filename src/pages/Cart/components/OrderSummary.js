import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetUser } from "../../../service/DataService";

export const OrderSummary = () => {

    const navi = useNavigate();

    const [userData,setUserData] = useState({
        name:"",
        email:""
      });

        useEffect(() => {
            async function user() {
              try{
                const data = await GetUser();
                setUserData(data);    
            }catch(error){
                console.log(error);
            }
            };
            user();
        } ,[])
    

  return (
    <main className="m-auto">
        <div className="m-16 p-12 border rounded text-center dark:text-slate-200">
             <i className="bi bi-check2-circle text-7xl text-green-600 font-bold"></i>
             <p className="my-6 text-lg"> Thank you {userData.name} for the order! <br />
                    Your Order ID: 2 </p>
             <p className="text-lg">Your order is confirmed. <br />
                    Please check your mail {userData.email} for the eBook.</p>
            <p className="my-2 text-lg">Payment ID: xyz_123456789</p>

            <button className="mt-8 bg-blue-700 rounded-lg text-slate-200 hover:bg-blue-800 text-lg p-2" onClick={() =>navi("/products") }> Continue shopping ! </button>
        </div>
    </main>
  )
}