import React from 'react';
import Home from './screens/home/Home';
import Details from './screens/details/Details';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route  path='/details' element={<Details />}>
                    <Route path=':movieId' element={<Details />} />
                </Route>
            </Routes>
        </Router>
      </React.Fragment>
    );
  }
}