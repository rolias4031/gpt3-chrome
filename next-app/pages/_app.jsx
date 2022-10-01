/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/globals.css';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-[300px] h-[500px] app-colors">
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
