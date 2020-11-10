import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import styles from './App.module.scss';

import Layout from './hoc/Layout/Layout';
import MainPage from './components/MainPage/MainPage';
import Introduce from './components/Introduce/Introduce';
import Meeting from './components/Meeting/Meeting';
import Activity from './components/Activity/Activity';
import Login from './containers/Login/Login';
import Join from './containers/Join/Join';
import BackDrop from './components/UI/BackDrop/BackDrop';

const App = (props) => {
    const [checkClick, setCheckClick] = useState(false);
    
    useEffect(() => {
        let body = document.getElementsByTagName('body');
        if(checkClick) {
            body[0].style.overflow = "hidden";
        }
    });
    
    useEffect(() => {
        const { history } = props;
        if(history.location.pathname !== "/introduce") {
            const header = document.getElementById('Nav');
            header.style.pointerEvents = "all";
            header.style.opacity = 1;
        }
    });
    
    const toogleLoginModal = () => {
        setCheckClick(!checkClick);
    }
    
  return (
    <div className={styles.App}>
          <Layout loginClick={toogleLoginModal}>
              <Switch>
                  <Route exact path="/" component={MainPage}></Route>
                  <Route path="/introduce" component={Introduce}></Route>
                  <Route path="/meeting" component={Meeting}></Route>
                  <Route path="/activity" component={Activity}></Route>
                  <Route path="/join" component={Join}></Route>
              </Switch>
              <Login open={checkClick} close={toogleLoginModal} />
              <BackDrop show={checkClick} clicked={toogleLoginModal} />   
          </Layout>
          
    </div>
  );
}

export default withRouter(App);
