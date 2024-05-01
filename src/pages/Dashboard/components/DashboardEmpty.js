import { useNavigate } from "react-router-dom"

export const DashboardEmpty = () => {

    const navi = useNavigate();

  return (
    <div className="m-auto max-w-4xl my-14 dark:text-slate-200">
        <div className="border p-12 rounded text-center">
            <i className="text-7xl text-green-600  bi bi-cart"></i>
            <p className="text-xl my-6">Oops! Your order dashboard looks empty! <br />
                Add eBooks to your cart from our store collection.</p>
            <button onClick={() => navi("/products")} className="rounded-lg bg-blue-700 hover:bg-blue-800 text-lg p-2 text-slate-200">Continue Shopping <i className="bi bi-cart"></i></button>
        </div>
    </div>
  )
}
