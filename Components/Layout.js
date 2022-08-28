
import Head from 'next/head';
import { useState,useEffect } from "react";
import NavBar from "./NavBar";
import Loading from "./Loading";
import nProgress from "nprogress";
import  Router,{useRouter}  from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';







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
      
   
      </Head>
      <div className="row d-flex col-md-12 col-12">
        
        <div className="col-3 col-md-2 ">
        <NavBar/>
        </div>
       

        {loading ? <Loading/> :<div className="col-9 col-md-10"> {children}</div>}
         

       
       
       
     </div>
</div>
  )
}

export default Layout