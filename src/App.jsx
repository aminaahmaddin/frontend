// import './App.css';
// import Navbar from './components/Navbar';
import Navber from '../src/components/Navbar/Navbar'
import Register from './components/Navbar/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
     <BrowserRouter>
     <Navber/>
     <Routes>
      <Route path='/register' element={<Register/>}/>
     </Routes>
     </BrowserRouter>
 
    </div>
  );
}

export default App;
