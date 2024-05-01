import { Link } from "react-router-dom"

export const DashboardProductCard = ({product}) => {

  return (
    <div className="flex flex-wrap justify-between dark:border-slate-700 max-w-4xl mx-4 m-auto p-2 mb-5 ">
      <div className="flex">
          <Link to={`products/${product.id}`}>
            <img className="w-32 rounded" src={product.poster} alt={product.name} />
          </Link>
          <div className="">
            <Link to={`products/${product.id}`}>
              <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
              <p className="text-md ml-2 dark:text-slate-200">${product.price}</p>
            </Link>            
          </div>
      </div>
    </div>
  )
}