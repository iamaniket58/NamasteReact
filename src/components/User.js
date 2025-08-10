import { useState } from "react"

const User=(props)=>{
    let[count,setCount]=useState(0)
    let[count2,setCount2]=useState(0)
    return(
       <div className="user-card">
        <h1>{count}</h1>
        <h2>{count2}</h2>
        <button onClick={()=>{
            let incount=count+1;
            setCount(incount)
            let incount1=count2+2;
            setCount2(incount1)
        }}>Click Me</button>
        <h2>Name: Aniket</h2>
        <h3>Location: Bangalore</h3>
        
        <h3>Contact: iamaniket58</h3>
       </div>
    )
}
export default User