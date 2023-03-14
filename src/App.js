import './App.css';
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import FavList from './component/FavList';
import Navbar1 from './component/Navbar1';


function App() {
  return (
    <div>
      <Navbar1 />
      
      <Routes>

        <Route path="/" element={< Home />}></Route>
        <Route path="/faver" element={< FavList />}></Route>



      </Routes>
    </div>
  );
}

export default App;
