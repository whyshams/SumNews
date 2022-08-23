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
        <Link href='/TopNews/World'><div  className={router.query.Category ? 'nav-button-active ':'nav-button '} ><a> World News</a></div></Link>
       {/* Bangladesh */}
       <div onClick={() => setBdOpen(!bdOpen)} className={bdOpen?'nav-button-active':'nav-button'}><a>Bangladesh</a><IconContext.Provider value={{className:"fa-beat-fade navIcon"}}> <FaAngleDown/></IconContext.Provider> </div>
       {
        bdOpen &&
          
            
        <div className='submenu'>
        <Link href='/BDnews/International'><div  className={router.asPath == "/BDnews/International" ? 'nav-button-active':'nav-button intMedia'} ><a >International Media</a></div></Link>
        
        {/* National Media */}
       <div onClick={() => setBdNatOpen(!bdNatOpen)} className={bdNatOpen?'nav-button-active':'nav-button'}><a>National Media</a><IconContext.Provider value={{className:"fa-beat-fade navIconNat"}}> <FaAngleDown/></IconContext.Provider></div>

        {bdNatOpen &&  <div className='submenu2'>
         <Link href='/BDnews/Divisional/Dhaka'><div  className={router.query.National ? 'nav-button-active':'nav-button'} ><a >Divisional</a></div></Link>
         <Link href='/BDnews/Categorical/news'><div  className={router.query.CategoryBd ? 'nav-button-active':'nav-button'} ><a >Categorical</a></div></Link>



        </div>  }
         
         <Link href='/BanglaNews/ঢাকা'>
           <div  className={router.query.Division ? 'nav-button-active':'nav-button'} >
           <a >বাংলা</a>
 
 
           </div>
           
           </Link>
 
        </div>

            
          
        
          
           
        
       }
       
        <div>
        <Link href='/Summarize'><div  className={router.asPath == '/Summarize' ? 'nav-button-active':'nav-button'} ><a >Summarizer</a></div></Link>

        </div>
      
        
       
        </div>
        

        


    </div>
    </>
  )
}

export default NavBar