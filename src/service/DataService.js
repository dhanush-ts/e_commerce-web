export async function GetUser(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    const response = await fetch(`http://localhost:8000/600/users/${cbid}`,{
        method:"GET",
        headers: {"Content-Type":"application/json", "Authorization": `Bearer ${token}`}
    })

    const data = await response.json();
    return data;
}

export async function GetUserOrders(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    const response = await fetch(`http://localhost:8000/660/orders?user.id=${cbid}`,{
        method: "GET",
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    });
    const data = await response.json()

    return data;
}