export async function GetUser(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    const response = await fetch(`${process.env.REACT_APP_API}/600/users/${cbid}`,{
        method:"GET",
        headers: {"Content-Type":"application/json", "Authorization": `Bearer ${token}`}
    })
    if(!response.ok){
        throw response.statusText;
    }
    const data = await response.json();
    return data;
}

export async function GetUserOrders(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    const response = await fetch(`${process.env.REACT_APP_API}/660/orders?user.id=${cbid}`,{
        method: "GET",
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    });
    if(!response.ok){
        throw response.statusText;
    }
    const data = await response.json()

    return data;
}

export async function CreateOrder(OrderDetails){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const response = await fetch(`${process.env.REACT_APP_API}/660/orders`,{
        method: "POST",
        headers: {"Content-Type":"application/json","Authorization":`Bearer ${token}`},
        body: JSON.stringify(OrderDetails)
    });
    if(!response.ok){
        throw response.statusText;
    }
    const data = await response.json()
    return data;
};

export async function GetCart(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    const response = await fetch(`${process.env.REACT_APP_API}/660/carts/${cbid}`,{
        method: "GET",
        headers: {"Content-Type":"application/json","Authorization":`Bearer ${token}`}
    });
    if(!response.ok){
        return {current:[], total_amount: 0};
    }
    const data = await response.json()
    return data;
}

export async function GetAllCarts(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const response = await fetch(`${process.env.REACT_APP_API}/660/carts`,{
        method: "GET",
        headers: {"Content-Type":"application/json","Authorization":`Bearer ${token}`}
    });
    if(!response.ok){
        return {current:[], total_amount: 0};
    }
    const data = await response.json()
    return data;
}