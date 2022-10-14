import React,{ useState } from "react"; 
import BaseHOC from "../hoc/BaseHoc";
const TestComponent=()=>{
    const [name,setName]=useState("Tiru");
    const [changeName,setChangeName]=useState(" ");
    return(
        <>
            <h1>My name is {name}</h1>
            <input type="text" onChange={(e)=>{setChangeName(e.target.value)}} />
            <button onClick={()=>{setName(changeName)}}>Click to update</button>
        </>
    )

}

export default BaseHOC(TestComponent);