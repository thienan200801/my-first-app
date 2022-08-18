import './App.css';
import Header from '../src/common/header/header';
import Home from './pages/home/home-main/home-main';
import Checkout from './pages/checkout/checkout-main';
import { React } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export default function App(){
  return (
    <ApolloProvider client={client}>
      <Header />
      <Checkout />
    </ApolloProvider>
  );
}
