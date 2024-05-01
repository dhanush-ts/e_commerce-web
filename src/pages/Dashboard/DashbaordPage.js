import { GetUserOrders } from "../../service/DataService";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { useEffect, useState } from "react";

export const DashbaordPage = () => {
  
  const [data, setData] = useState([]);

    useEffect(() => {
        async function GetOrders(){
            const result = await GetUserOrders();
            setData(result);
        }
        GetOrders()
    },[] )

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
        { data.length!==0?<DashboardCard data={data} />:<DashboardEmpty />}
      </section>
    </main>
  )
}