import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace';

/*tab button: multi line indent */

/*path: url path*/

/*React rerenders what we see on the screen without reloading the page based on the url we we enter*/

const App = () => {
  return ( 
    <Router>
      <Switch> {/* without the swith, react would keep evaluating each line and end on redirect to "/"*/}
        <Route path="/" exact> {/*without exact, /anything would work. also / is the same as without a slash (no Path)*/}
          <Users />
        </Route>
        <Route path="/places/new" exact> 
          <NewPlace />
        </Route>
        <Redirect to="/"/> {/* for anything not matching the routes, go back to home / no path*/}
      </Switch>
    </Router>
  );
}

export default App;
