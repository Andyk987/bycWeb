import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';

import Layout from './hoc/Layout/Layout';
import First from './components/First/First';
import Introduce from './components/Introduce/Introduce';
import Meeting from './components/Meeting/Meeting';
import Activity from './components/Activity/Activity';
import Login from './containers/Login/Login';
import Join from './containers/Join/Join';

const App = (props) => {
  return (
    <div className={styles.App}>
          <Layout>
              <Switch>
                  <Route exact path="/" component={First}></Route>
                  <Route path="/introduce" component={Introduce}></Route>
                  <Route path="/meeting" component={Meeting}></Route>
                  <Route path="/activity" component={Activity}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/join" component={Join}></Route>
              </Switch>
          </Layout>
    </div>
  );
}

export default App;
