import Head from 'next/head'
import Link from 'next/link'



export default function Home() {
  return (
    <div className='Home'>
      <Head>
        <title>sumNews</title>
        <meta name="description" content="Get the latest news of Bangladesh and Around The World from the best news journals of the globe and summarize them seconds with our summarizer tool.." />
        <meta name='keywords' content='summarize news, get news, find news, short news, news digest,bangladesh news, bangladesh news digest, bangladesh news, global news, bangladesh international news, bangladesh divisional news, বাংলা সংবাদ'/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5159189580385319"
     crossOrigin="anonymous"></script>
      </Head>
      <div className=' col-md-12 align-items-center mt-5'>
       <div>
        <h1 className='fontType frontLogo d-flex justify-content-center align-items-center'>sum(NEWS)</h1>
       </div>
       
       <div className='d-md-flex d-inline-block justify-content-center align-items-center mt-5'>
        <p className='fontBang frontPara text-dark'>Is here to make news consumption as easy as possible!</p>
       </div>
      </div>
      <div className='d-flex justify-content-center align-items-center mt-5'>
          <h4 className='text-dark'>In Sum News, You can :</h4>
      </div>
      <div className='d-flex justify-content-center align-items-center mt-2'>
          <p>Summarize any English Article or News in <Link href='/Summarize'><span className='frontLink'>Summarizer Tool</span></Link> </p>
      </div>
      <div className='d-flex justify-content-center align-items-center mt-2'>
          <p>Find Out latest <Link href='/TopNews/World'><span className='frontLink'>World News</span></Link></p>
      </div>
      <div className='d-flex justify-content-center align-items-center mt-2'>
          <p>Surf the latest news of Bangladesh across <Link href='/BDnews/International'><span className='frontLink'>World Media</span></Link> and Local <Link href='/BanglaNews/ঢাকা'><span className='frontLink'>বাংলা</span></Link> or English news agencies respectively.</p>
      </div>


      
      
    </div>
  )
}
