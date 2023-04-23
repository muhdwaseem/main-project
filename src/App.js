

import './index.css'


import './App.css' ;
import Home from './pages/Home'

// import Sidebar from "./componentss/Sidebar";
// import Navbar from './componentss/Navbar';
import { BrowserRouter, Outlet, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';

import Signin from './pages/Signin'
import Login from './pages/Login'
import Book from './pages/Book';
import Edit from './pages/Edit';
import View from './pages/View';
import Add from './pages/Add';
import Navbar1 from './componentss/Navbar1';
import { Children, useState } from 'react';
import Client from './pages/Client';
import Addclient from './pages/Addclient';
import Editclient from './pages/Editclient';
import { Col, Container, Row } from 'react-bootstrap';
// import Sidebar1 from './componentss/Sidebar1';
import Customer from './pages/Customer';
import Addcustomer from './pages/Addcustomer';
import Customeredit from './pages/Customeredit';
import Team from './pages/Team';
import Addteam from './pages/Addteam';
import Editteam from './pages/Editteam';
import Order from './pages/Order';
import Createorder from './pages/Createorder';
import Editorder from './pages/Editorder';
import shahinnav from './componentss/Shahinnav';
import Shahinnav from './componentss/Shahinnav';


// import Navpath from './componentss/Navpath';
function App() {
  const [showbooks, setshowbooks] = useState(true)


  return (
    <div className="App">
  




 



  



   
   
  
   <BrowserRouter >
<Shahinnav/>
  
   
<Routes >
<Route path='/book' element={<Book/>}>  </Route>
  <Route path='/add' element={<Add/>}></Route>
  <Route path='/edit/:id' element={<Edit/>}>  </Route>
<Route path='/view/:id' element={<View/>}>  </Route>
<Route path='/signin' element={<Signin/>}/>
<Route path='/login' element={<Login/>}/>  
<Route path='/client' element={<Client></Client>}></Route>
<Route path='/addclient' element={<Addclient></Addclient>}></Route>
<Route path='/editclient/:id' element={<Editclient></Editclient>}></Route>
<Route path='/customer' element={<Customer></Customer>}></Route>
<Route path='/addcustomer' element={<Addcustomer/>}></Route>
<Route path='/editcustomer/:id' element={<Customeredit/>}></Route>
<Route path='/team' element={<Team/>}></Route>
<Route path='/addteam' element={<Addteam/>}></Route>
<Route path='/teamedit/:id' element={<Editteam/>}></Route>
<Route path='/order' element={<Order/>}></Route>
<Route path='/createorder' element={<Createorder/>}></Route>
<Route path='/editorder/:id' element={<Editorder/>}></Route>
</Routes>


</BrowserRouter>

   </div>

     
  

  );
}

export default App;
