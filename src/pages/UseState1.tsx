import { useEffect, useState } from "react";

function UseState1(){
    console.log("re render")
    const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log("message")
    },[count])

    const handleSubmit = (e:any) =>{
        e.preventDefault()
        setCount(count+1)
    }



    return(
        <div className="h-[100vh] w-full border">
            <form>
                <p>Count: {count} </p><br />
                <input type="submit" onClick={handleSubmit} value="Increment"/>
            </form>
        </div>
    )
}

export default UseState1;