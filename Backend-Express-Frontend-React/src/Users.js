import React,{useState} from "react";
function Users(){
    const [response,set] = useState("");
    fetch("http://localhost:9000/users")
    .then(res => res.text())
    .then(res => set(res));

    return <h1>{response}</h1>
}
export default Users;