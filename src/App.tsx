
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import ProductListing from './components/products/ProductListing'

function App() {

  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       refetchOnWindowFocus: false,
  //       retry: 1,
  //       staleTime: 1000 * 60 * 5, // 5 minutes
  //     },
  //   },
  // })

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div style={{ width: '100%' }}>
          <ProductListing />
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App
