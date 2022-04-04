
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Review from './Component/Review/Review';

function App() {
  return (
    <div className="mb-5">
      <Navbar />
     <Routes>
       <Route  path='*' element={'not Found'}/>
       <Route path='/' element={<Home />}/>
       <Route path='/review' element={<Review />}/>
       <Route path='/dashboard' element={<Dashboard />}/>
     </Routes>
    </div>
  );
}

export default App;
