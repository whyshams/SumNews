import React,{useContext,createContext,useState,useEffect} from 'react';
import axios from 'axios';

const ResultContext = createContext();


export default function ResultContextProvider  ({children})  {
    const [bdNewsData,setBdNewsData] = useState([]); 

    const [bdNewsDataDiv, setBdNewsDataDiv] = useState([]);
    const [bdNewsDataCat, setBdNewsDataCat] = useState([]);
    
    const [catData,setCatData] = useState([]);


    const [sumData, setSumData] = useState();
    const [sumInput,setSumInput] = useState('');
    const [sumText,setSumText] = useState('');

    


    const [copied, setCopied] = useState(false);





  return (
    <ResultContext.Provider value={{bdNewsData,setBdNewsData,bdNewsDataDiv,setBdNewsDataDiv,catData,setCatData,sumData, setSumData,sumInput,setSumInput,sumText,setSumText,copied,setCopied,bdNewsDataCat, setBdNewsDataCat}}>
          {children}
        </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext)
