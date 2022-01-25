import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home/Home';

import Notfound from './Pages/Notfound/NOtfound';
import Banner from './Pages/Home/Banner/Banner';
import Booking from './Pages/Booking/Booking';
import Packege from './Pages/Home/Packege/Packege';
import Login from './Pages/Login/Login/Login';
import Authprovider from './Context/Authprovider';
import PrivateRoute from './Pages/Login/PrivateRoute/Privateroute';
import Footer from './Shared/Footer/Footer';
import Allbooking from './Pages/Dashboard/Allbooking/allbooking';
import Mybooking from './Pages/Dashboard/Mybooking/Mybooking';
import Addnewpackege from './Pages/Dashboard/AddnewPackege/Addnewpackege';

import Dashboard from './Pages/Dashboard/Admin/dashboard';
import Resort from './Pages/Home/Resort/Resort';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

    }, 1000);



  }, [])

  return (
    <div className="App">
      {
        loading ?
          <Spinner animation="grow" />
          :
          <Authprovider>
            <BrowserRouter>
              <Header></Header>
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route path="/login">
                  <Login></Login>
                </Route>
                <Route path="/allbooking">
                  <Allbooking></Allbooking>
                </Route>
                <Route path="/mybooking">
                  <Mybooking></Mybooking>
                </Route>
                <Route path="/addnewPackege">
                  <Addnewpackege></Addnewpackege>
                </Route>
              
                <Route path="/dashboard">
                 <Dashboard/>
                </Route>
                <Route path="/resort">
                 <Resort/>
                </Route>

                <PrivateRoute path="/booking/:id">
                  <Booking></Booking>
                </PrivateRoute>
                <Route path="*">
                  <Notfound></Notfound>
                </Route>
              </Switch>
              <Footer></Footer>

            </BrowserRouter>
          </Authprovider>

      }
    </div>
  );
}

export default App;
