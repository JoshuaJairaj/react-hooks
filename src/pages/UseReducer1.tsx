import { useReducer } from 'react';

function reducer(state:any,action:any){
    if (action.type = 'increment_age'){
        return {
            age: state.age+1
        }
    }
    throw Error("Invalid function")
}


export default function UseReducer1(){
    const [state,dispatcher] = useReducer(reducer,{age:20})
    

    return(
        <>
            <p>My age is {state.age}</p>
            <button className='border p-2' onClick={() => {
                dispatcher({type:'increment_age'})
            }} >Increase my age</button>
        </>
    )
};