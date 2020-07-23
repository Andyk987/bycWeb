import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Layout from './hoc/Layout/Layout';
import Introduce from './components/Introduce/Introduce';
import Meeting from './components/Meeting/Meeting';
import Activity from './components/Activity/Activity';

function App() {
  return (
    <div className="App">
          <Layout>
              <Switch>
                  <Route exact path="/" render={props => (<h1>Byc - 환영해요</h1>)}></Route>
                  <Route path="/introduce" component={Introduce}></Route>
                  <Route path="/meeting" component={Meeting}></Route>
                  <Route path="/activity" component={Activity}></Route>
              </Switch>
          </Layout>
    </div>
  );
}

export default App;
