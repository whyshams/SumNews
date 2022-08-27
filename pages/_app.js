import  ResultContextProvider  from './Contexts/ResultContextProvider';

import Layout from '../Components/Layout';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return(
      <Layout>
    <ResultContextProvider>

        <Component {...pageProps} />
    </ResultContextProvider>

      </Layout>
     
  

  ) 
}
 
export default MyApp
