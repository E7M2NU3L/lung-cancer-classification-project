import React from 'react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

type Props = {
    children : React.ReactNode;
}

const ViteQueryContextProvider = (props: Props) => {
    const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>
  )
}

export default ViteQueryContextProvider