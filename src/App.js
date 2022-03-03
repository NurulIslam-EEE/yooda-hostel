
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import AddStudent from './components/AddStudent/AddStudent';
import AddFood from './components/AddFood/AddFood';
import DistributionList from './components/DistributionList/DistributionList';
import NavBar from './components/NavBar/NavBar';
import EditFood from './components/EditFood/EditFood';

function App() {
  return (
    <div className="row m-0">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addStudent" element={<AddStudent />}></Route>
          <Route path="/addFood" element={<AddFood />}></Route>
          <Route path="/addFood" element={<AddFood />}></Route>
          <Route path="/distribution" element={<DistributionList />}></Route>
          <Route path="/editFood/:id" element={<EditFood />}></Route>




        </Routes>
      </Router>
    </div>
  );
}

export default App;
