import React,{useState} from 'react';
import Pagination from '../../Components/Pagination';
import { useRouter } from 'next/router';
import axios from 'axios';
import moment from 'moment';
import {FaAngleDown} from 'react-icons/fa';
import { IconContext } from "react-icons";





const Division = ({Data}) => {
    
    const[banglaText,setBanglaText] = useState();
    const [summaryOn,setSummaryOn] = useState(false);
    
    
    
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/BanglaNews/${banglaText}`)

    }




        {/* Pagination algo*/}
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const paginatedData = Data.slice(indexOfFirstPost, indexOfLastPost);

const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div>
      <div className='row'>
        <div className='card col-md-12'> 
        <div className='MainPageTitle'>
          <h2 className=' m-3 d-flex justify-content-center align-items-center'>
            বিভাগ অনুযায়ী বাংলা সংবাদ
          </h2>
        </div>
        </div>
      </div>
      <div className='bdCatFirstPart card'>
      <div className='row'>
            <div className='col-md-12'>
      <div className='b-block'>
        <div className='m-2'>
        <h6 className='OptionTitle d-flex justify-content-center align-items-center'>Change the Division to see top news of last Week</h6>
        
        <form className='form-group d-flex justify-content-center align-items-center' onSubmit={handleSubmit}>
            <label>
                Select the Division   <IconContext.Provider value={{className:"fa-bounce"}}> <FaAngleDown/></IconContext.Provider> 
            <select className='form-control SelectOption' value={banglaText} onChange={(e) => setBanglaText(e.target.value)}>
            <option value='ঢাকা'>ঢাকা</option>
            <option value='চট্টগ্রাম'>চট্টগ্রাম</option>
            <option value='খুলনা'>খুলনা</option>
            <option value='রাজশাহী'>রাজশাহী</option>
            <option value='বরিশাল'>বরিশাল</option>
            <option value='সিলেট'>সিলেট</option>
            <option value='ময়মনসিংহ'>ময়মনসিংহ</option>
            <option value='রংপুর'>রংপুর</option>
            
            
            </select>
          <button className='btn CopyButton' type='submit'>Submit</button>


            </label>
       

        </form>
        </div>
        
        </div>
    </div>
    
          </div>
    </div>
    <div className='card'>
    
        <hr/>
      </div>
       
        <div className='second'>
          
        <div>
        <div>
            
        {
    paginatedData.map((data)=>(
      <div key={data.title} className='card col-12'>
        
        <div  className='row col-md-12 '>
        <div className='col-md-4 col-12'>
          
          <img className='rounded nationalImage ' src={data.media}/>

        </div>
        <div className='col-md-8 '>
        <div className='col-12 nationalContent'>
          <h3 className='nationalTitle mb-2 d-flex justify-content-center align-items-center'>{data.title}</h3>
          
          
          
             <div><p className='nationalSummary'><strong>Description :</strong> {data.summary.split(" ").splice(0,40).join(" ")}</p></div>
          
          
          

          <div className='d-block'>
            <h5 className='  d-flex justify-content-center align-items-center' >{moment(data.published_date).fromNow()}</h5> 
            <div className=' d-flex justify-content-center align-items-center'>
            <h6 >by </h6>

            </div>
            <div className='d-flex justify-content-center align-items-center'>
            <p>{data.rights.toUpperCase()}</p>
            </div>
          </div>
           
          
          <div className='row'>
                                      
                                      
                                      
                                 
                              <div className=' col-12 col-md-12 d-flex d-md-flex justify-content-center'>
                              <a target="_blank" rel="noreferrer" className=' btn  CopyButton mx-2 px-5' href={data.link}>Go To Link</a>


                              </div>
                               </div>

        <hr/>

          </div>


        </div>

</div>

      </div>
      
        
       
    ))}
        </div>
        <div className='col-md-12'>
                        <div className='pagination d-flex justify-content-center mt-3 align-items-center'>
                <Pagination
                     postsPerPage={postsPerPage}
                      totalPosts={Data.length}
                      paginate={paginate}
                  />

                </div>

                        </div>
     
        </div>

        </div>

    </div>
  )
}

export default Division



export async function getServerSideProps(context) {
        const {params} = context
        const {Division} = params 
      
       const res = await axios.request({
        method: 'GET',
        url: 'https://newscatcher.p.rapidapi.com/v1/search_enterprise',
        params: {
          q: `${Division}`,
          lang: 'bn',
          sort_by: 'date',
          country: 'BD',
          page: '1',
          media: 'True'
        },
        headers: {
          'X-RapidAPI-Key': '3fb40035d8msh0e1e6217ef102cap139658jsnbf4b614c85e3',
          'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
        }
       })
       const Data = res.data.articles;
       
       
   
    return {
      props: {Data : Data}, 
    }
  }
