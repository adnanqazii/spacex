import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {gql,ApolloProvider,InMemoryCache,ApolloClient} from '@apollo/client'
import App from './App';
import reportWebVitals from './reportWebVitals';
const client=new ApolloClient({
  uri:"https://spacexdata.herokuapp.com/graphql",
  cache:new InMemoryCache()
})
ReactDOM.render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
