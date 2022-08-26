import React,{useEffect} from 'react';
import { useResultContext } from './Contexts/ResultContextProvider';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const Summarize = () => {
    const {sumData, setSumData,sumInput,setSumInput,sumText,setSumText} = useResultContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSumInput(sumText)
      }

      const getData = async () => {
        const res = await axios.request(
          {
            method: 'POST',
            url : "https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/",
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': '91e78a74ccmsh7e51ffc1bd6019ep1d690ajsn8567c628fd59',
              'X-RapidAPI-Host': 'tldrthis.p.rapidapi.com'
              },
            data: `{"url":"${sumInput}","min_length":100,"max_length":300,"is_detailed":true}`
        })
        setSumData(res)
      }
    
      useEffect(() => {
            getData();
        },[sumInput])
      
      
    
      return (
        <div>
          <div className='sumInput justify-content-center align-items-center d-flex'>
            <div className='justify-content-center align-items-center d-flex'>
            <div className='col-12 d-block ' >
                    <form className='  ' onSubmit={handleSubmit}>
                      <div className=' '>
                <input className='SumInput' placeholder='Input LINK for Summarization...' type="text" value={sumText} onChange={(e)=>setSumText(e.target.value)} />


                      </div>
                      <div className=' '>
                <button type='submit' className='btn CopyButton'>Submit</button>

                        
                        </div>
            </form>
    
                    </div>

            </div>
         
    
          </div>
    
    
          <div className='results'>
          <div >
                
            {
                sumData && <div><h4>{sumData.data.summary}</h4></div>
            }
    
            </div>
    
          </div>
        </div>
      )
}

export default Summarize