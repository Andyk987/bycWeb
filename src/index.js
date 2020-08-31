import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styles from './assets/scss/reset.module.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { CookiesProvider } from 'react-cookie';

const apolloClient = new ApolloClient({ uri: "https://graphql-api.run.goorm.io/graphql" });

ReactDOM.render(
    <ApolloProvider client={ apolloClient }>
        <CookiesProvider>
           <BrowserRouter>
                <App />
            </BrowserRouter> 
        </CookiesProvider>
    </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
