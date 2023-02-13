
import './App.css';
import LoginPage from './Login/LoginPage';
import HomePage from './Home/HomePage';
import UpdateUser from './Home/UpdateUser';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import CreateUser from './Home/CreateUser';
import { Link } from 'react-router-dom';
import ProtectedRout from './Home/ProtectedRout';


function App() {
  return (
    <>

      
    <Router>
    <Routes>
        
       <Route path="/" element={<LoginPage />} />
    {/* <Route path="/" element={<HomePage />} /> */}
      <Route
      exact
       path="/HomePage/"  element={<ProtectedRout MyComponant={HomePage}/>} />
    <Route path="/CreateStudent/" element={<CreateUser />} />
    <Route path="/UpdateStudent/:id" element={<UpdateUser/>}/>
  </Routes>
</Router>
    </>
  );
}

export default App;
