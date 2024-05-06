import { useEffect, useState } from "react";
import { ProductCard } from "../../../components";
import { Featured } from "../../../service/ProductService"

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts(){
    try{
      const data = await Featured()
      setProducts(data);
    } catch(error){
      console.log(error)
    }
    }
    fetchProducts();
  }, [])

  return (
    <section className="my-20 bg-orange-500">
      <div className ="custom-shape-divider-top-1714973442">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className ="shape-fill"></path>
    </svg>
</div>
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
        <div className="flex flex-wrap justify-center lg:flex-row">

          { products.map((product) => (
            <ProductCard key={product.id} product={product} />
          )) }

        </div>
    </section>
  )
}
