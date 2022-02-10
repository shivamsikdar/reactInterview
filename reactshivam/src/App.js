import React from 'react';
import List from './components/List';
// import Details from './components/Details';
import {BrowserRouter, Route } from "react-router-dom";
// import Details from './components/Details';


function App () {
  return <div>
    <div className="page-container">
          <div className="content-wrap">
          {/* <List /> */}
          <BrowserRouter>
            <List/>
            
              {/* <Route  path ="/" exact component={List}/> */}
              {/* <Route  path ="/details"  component={Details}/> */}
              {/* <Route  path ="/details"><Details/></Route>  */}
              {/* <Route path="/details"> */}
              {/* <Details /> */}
            {/* </Route> */}
            
            
          </BrowserRouter>
          
          
          </div>
          
        </div>
  </div>;
};

export default App;
