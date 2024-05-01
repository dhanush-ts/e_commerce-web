import { DashboardProductCard } from "./DashboardProductCard";

export const DashboardCard = ({data}) => {

  return (
    <div>
        <div className="max-w-4xl m-auto dark:text-slate-200">
        { data.map( order => (
                <div key={order.id} className="my-4 border rounded bg-slate-700">
                    <div className="flex justify-between">
                        <p className="mx-6 my-2">Order id: {order.id} </p>
                        <p className="mx-6 my-2 font-semibold">Total:  ${order.amount_paid}</p>
                    </div>
                    {order.cartList.map( pro => <DashboardProductCard key={pro.id} product={pro} /> )}
                </div>
            ))}
        </div>
    </div>
  )
}