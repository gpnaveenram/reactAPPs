import { userURL } from "./config";

export const createUser = async (userData)=>{
    const response = await fetch(`${userURL}/users`,
    {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userData)
    }
    );
    const user = await response.json();
    return user;
}

export const getUsers = async ()=>{
    const response = await fetch(`${userURL}/users`);
    const users = await response.json();
    return users;
}