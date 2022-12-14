import  ResultContextProvider  from './Contexts/ResultContextProvider';

import Layout from '../Components/Layout';
import '../styles/globals.css';
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  return(
      <Layout>
    <ResultContextProvider>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=UA-172039083-4" />
    <Script strategy="afterInteractive" id="google-analytics" >
      {
        `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js',new Date());
        gtag('config','UA-172039083-4')
        `
      }
    </Script>
    <h1></h1>

        <Component {...pageProps} />
    </ResultContextProvider>
  </Layout>
     
  

  ) 
}
 
export default MyApp
