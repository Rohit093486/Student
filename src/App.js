// import './App.css';
import NewDetails from "./Component/AddNewDetails/NewDetails";
import EditDetails from "./Component/EditStudentDetails/EditDetails";
import Table from "./Component/Table/Table";

function App() {
  return (
    <div className="App">
      <Table />
      <NewDetails /> 
            <EditDetails />
    </div>
  );
}

export default App;
