import  ResultContextProvider  from './Contexts/ResultContextProvider';

import Layout from '../Components/Layout';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return(
    <ResultContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ResultContextProvider>
     
  

  ) 
}
 
export default MyApp
