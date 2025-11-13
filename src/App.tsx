import './App.css'
import { BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import UseState1 from './pages/UseState1';
import UseState2 from './pages/UseState2';
import UseState3 from './pages/UseState3';
import UseState4 from './pages/UseState4';
import UseState5 from './pages/UseState5';
import UseEffect1 from './pages/UseEffect1';
import UseEffect2 from './pages/UseEffect2';
import UseEffect3 from './pages/UseEffect3';
import UseRef1 from './pages/UseRef1';
import UseRef2 from './pages/UseRef2';
import UseReducer1 from './pages/UseReducer1';
import UseReducer2 from './pages/UseReducer2';
import UseReducer3 from './pages/UseReducer3';
import WithUseCallback from './pages/WithUseCallBack';
import UseMemo from './pages/UseMemo';
import UseMemoExample from './pages/UseMemoExample';
import UseMemoExample2 from './pages/UseMemoExample2';

function App() {

  return (
    <div className='w-full h-[100vh] border'>
    <Router>
      <div className='flex flex-row'>
        <Navbar></Navbar>
        <div className='bg-blue-200 w-full'>
          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/usestate1" element={<UseState1 />} />
          <Route path="/usestate2" element={<UseState2 />}/>
          <Route path="/usestate3" element={<UseState3 />}/>
          <Route path='/usestate4' element={<UseState4 />} />
          <Route path='/usestate5' element={<UseState5 />} />
          <Route path='/useEffect1' element={<UseEffect1 />} />
          <Route path='/useEffect2' element={<UseEffect2 />} />
          <Route path='/useEffect3' element={<UseEffect3 />} />
          <Route path='/useRef1' element={<UseRef1 />} />
          <Route path='/useRef2' element={<UseRef2 />} />
          <Route path='/useReducer1' element={<UseReducer1 />} />
          <Route path='/useReducer2' element={<UseReducer2 />} />
          <Route path='/useReducer3' element={<UseReducer3 />} />
          <Route path='/useCallback1' element={<WithUseCallback />} />
          <Route path='/useMemo' element={<UseMemo />} />
          <Route path='/useMemoExample' element={<UseMemoExample />} />
          <Route path='/useMemoExample2' element={<UseMemoExample2 />} />
        </Routes>
        </div>
        
      </div>
      
    </Router>
    </div>
  )
}

export default App
