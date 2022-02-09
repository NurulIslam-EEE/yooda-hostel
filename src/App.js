
import './App.css';
import AddFood from './components/addFood/AddFood';
import AddStudent from './components/addStudent/AddStudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import DistributionList from './components/DistributionList/DistributionList';


function App() {
  return (
    <div className="row">
      <AddFood />
      <AddStudent />
      <DistributionList />

    </div>
  );
}

export default App;
