import React,{useState} from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import {FaAngleDown} from 'react-icons/fa';
import { IconContext } from "react-icons";

const NavBar = () => {
  const [bdOpen , setBdOpen] =useState(false);
  const [bdNatOpen,setBdNatOpen] = useState(false)


  
   

    const router = useRouter();
    console.log(router.query)
  return (
    <>
    


    <div className='menu d-block '>
        <div className='Nav '>
        <Link href='/TopNews/World'><div  className={router.query.Category ? 'nav-button-active ':'nav-button '} ><span> World News</span></div></Link>
       {/* Bangladesh */}
       <div onClick={() => setBdOpen(!bdOpen)} className={bdOpen?'nav-button-active':'nav-button'}><span>Bangladesh</span><IconContext.Provider value={{className:"fa-beat-fade navIcon"}}> <FaAngleDown/></IconContext.Provider> </div>
       {
        bdOpen &&
          
            
        <div className='submenu'>
        <Link href='/BDnews/International'><div  className={router.asPath == "/BDnews/International" ? 'nav-button-active':'nav-button intMedia'} ><span >International Media</span></div></Link>
        
        {/* National Media */}
       <div onClick={() => setBdNatOpen(!bdNatOpen)} className={bdNatOpen?'nav-button-active':'nav-button'}><span>National Media</span><IconContext.Provider value={{className:"fa-beat-fade navIconNat"}}> <FaAngleDown/></IconContext.Provider></div>

        {bdNatOpen &&  <div className='submenu2'>
         <Link href='/BDnews/Divisional/Dhaka'><div  className={router.query.National ? 'nav-button-active':'nav-button'} ><span >Divisional</span></div></Link>
         <Link href='/BDnews/Categorical/news'><div  className={router.query.CategoryBd ? 'nav-button-active':'nav-button'} ><span >Categorical</span></div></Link>



        </div>  }
         
         <Link href='/BanglaNews/ঢাকা'>
           <div  className={router.query.Division ? 'nav-button-active':'nav-button'} >
           <span >বাংলা</span>
 
 
           </div>
           
           </Link>
 
        </div>

            
          
        
          
           
        
       }
       
        <div>
        <Link href='/Summarize'><div  className={router.asPath == '/Summarize' ? 'nav-button-active':'nav-button'} ><span >Summarizer</span></div></Link>

        </div>
      
        
       
        </div>
        

        


    </div>
    </>
  )
}

export default NavBar