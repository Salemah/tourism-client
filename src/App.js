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
          <BrowserRouter>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/booking/:id">
                <Booking></Booking>
              </Route>
              {/* <Route path="*">
              <Notfound></Notfound>
            </Route> */}
            </Switch>

          </BrowserRouter>


      }
    </div>
  );
}

export default App;
