
import Head from 'next/head';
import { useState,useEffect } from "react";
import NavBar from "./NavBar";
import Loading from "./Loading";
import nProgress from "nprogress";
import  Router,{useRouter}  from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaArrowAltCircleLeft} from 'react-icons/fa';






Router.onRouteChangeStart = url => {
  nProgress.start()
  nProgress.set(0.3)
 

}
Router.onRouteChangeComplete = () => {
  
  nProgress.done()
  nProgress.set(1)
}



const Layout = ({children}) => {
  const router = useRouter();


  const [loading,setLoading] = useState(false);
  useEffect(() => {
    const handleComplete = () => {
      setLoading(false);
    };
    const handleStart = () => {
      setLoading(true)
    }
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeStart", handleStart);

    return () => {
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeStart", handleStart);

    }
  }, [Router])
  



  return (
    <div>
       <Head>
      
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
          
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/fontawesome.min.css" integrity="sha384-X8QTME3FCg1DLb58++lPvsjbQoCT9bp3MsUU3grbIny/3ZwUJkRNO8NPW6zqzuW9" crossOrigin="anonymous"/>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5159189580385319"
     crossorigin="anonymous"></script>
      </Head>
      <div className="row d-flex col-md-12 col-12">
        
        <div className="col-3 col-md-2 ">
        <NavBar/>
        </div>
       

        {loading ? <Loading/> :<div className="col-9 col-md-10"><button onClick={() => router.back()}>
       
               <FaArrowAltCircleLeft/>
         
          </button>   {children}</div>}
         

       
       
       
     </div>
</div>
  )
}

export default Layout