
import './App.css';
import CustomerTable from './Components/CustomerTable';
import Signup from './Components/Signup';
import Login from './Components/Login';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div  className='app'>
      

      
        <Routes>
        <Route path='/' exact element= {<Signup/>}/> 
        <Route path='/login' exact element= {<Login/>}/> 
         
          <Route path='/customerTable' exact element= {<CustomerTable/>}/>
       

        
          </Routes>
       
          </div>
          
</Router>
  );
}

export default App;
