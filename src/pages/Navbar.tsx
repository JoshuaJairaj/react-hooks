import { NavLink } from 'react-router-dom';


function Navbar(){
    return(
        <div  className='w-1/5 h-[100vh]  border p-5'>
            <nav className='flex flex-col '>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/usestate1">UseState1</NavLink>
            <NavLink to="/usestate2">UseState2</NavLink>
            <NavLink to="/usestate3">UseState3</NavLink>
            <NavLink to="/usestate4">UseState4</NavLink>
            <NavLink to="/usestate5">UseState5</NavLink>
            <NavLink to="/useEffect1">UseEffect1</NavLink>
            <NavLink to="/useEffect2">UseEffect2</NavLink>
            <NavLink to="/useEffect3">UseEffect3</NavLink>
            <NavLink to="/useRef1">UseRef1</NavLink>
            <NavLink to="/useRef2">UseRef2</NavLink>
            <NavLink to="/useReducer1">UseReducer1</NavLink>
            <NavLink to="/useReducer2">UseReducer2</NavLink>
            <NavLink to="/useReducer3">UseReducer3</NavLink>
            <NavLink to="/useCallback1">UseCallback1</NavLink>
            <NavLink to="/useCallback2">UseCallback2</NavLink>
            <NavLink to="/useMemo">UseMemo</NavLink>
            <NavLink to="/useMemoExample">UseMemoExample</NavLink>
            <NavLink to="/useMemoExample2">UseMemoExample2</NavLink>
            </nav>
        </div>    
    )
}

export default Navbar;