export async function Registerer(authDetail){
    const response = await fetch("http://localhost:8000/register",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(authDetail)
    })

    const data = await response.json()

    if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
      }

    return data;
};

export async function Loginer(authDetail){
    const response = await fetch("http://localhost:8000/login",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(authDetail)
    })

    const data = await response.json(); 

    if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
      }

    return data;
}