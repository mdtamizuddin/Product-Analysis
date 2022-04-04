
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Review from './Component/Review/Review';

function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
       <Route  path='*' element={'not Found'}/>
       <Route path='/' element={<Home />}/>
       <Route path='/review' element={<Review />}/>
     </Routes>
    </div>
  );
}

export default App;
