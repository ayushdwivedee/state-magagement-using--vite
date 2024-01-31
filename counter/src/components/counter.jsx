import { useState } from "react"
function Counter(){
    const [count,setCount]=useState(1)
    return(
        <>
        <div className="card">
            <h1>{count}</h1>
  <button onClick={() => setCount((count) => count + 1)}>
    Increase count
  </button>
  <button onClick={() => setCount((count) => count - 1)}>
  Decrease count
</button>
</div>
        </>
    )

}
export default Counter