import React from 'react';
import { DataProvider } from '../src/context/DataContext';
import  'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/style.css'
import Router from "next/router";
import Loader from "../src/components/Loader/loader";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  const handleRouteChangeStart = () => {
    setLoading(true);
  };

  const handleRouteChangeComplete = () => {
    setLoading(false);
  };

  Router.events.on("routeChangeStart", handleRouteChangeStart);
  Router.events.on("routeChangeComplete", handleRouteChangeComplete);

  return (
    <DataProvider>
       {loading && <Loader />}
      <Component {...pageProps} />
    </DataProvider>
  )
}