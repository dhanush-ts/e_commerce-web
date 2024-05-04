export async function Featured(){
    const response = await fetch(`${process.env.REACT_APP_API}/444/featured_products`);
    if(!response.ok){
        throw response.statusText
    }
    const data = await response.json()
    return data;
}

export async function ProductDetails(id){
    const response = await fetch(`${process.env.REACT_APP_API}/444/products/${id}`);
    if(!response.ok){
        throw response.statusText
    }
    const data = await response.json()
    return data;
}

export async function ProductsLists(searchTerm){
    const response = await fetch(`${process.env.REACT_APP_API}/444/products?name_like=${searchTerm ? searchTerm : ""}`);
    if(!response.ok){
        throw response.statusText
    }
    const data = await response.json()
    return data;
}