import NewDetails from "./Component/AddNewDetails/NewDetails";
import EditDetails from "./Component/EditStudentDetails/EditDetails";
import Table from "./Component/Table/Table";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">        
        <Switch>
          <Route  path="/" exact component={Table} />
          <Route  path="/AddForm" exact component={NewDetails} />
          <Route  path="/EditForm/:id"  exact component={EditDetails} />
        </Switch>      
    </div>
    </BrowserRouter>
    <ToastContainer />
    </>
  );
}

export default App;
