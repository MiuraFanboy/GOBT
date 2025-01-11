import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './styles/App.css'
import AnimePage from './pages/AnimePage/AnimePage'

function App() {
  const queryClient = new QueryClient();
  

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <AnimePage />
      
    </QueryClientProvider>
  )
}

export default App
