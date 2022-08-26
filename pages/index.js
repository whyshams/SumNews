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
      <div className='lazy col-md-12 align-items-center mt-5'>
        <h1 className='d-flex justify-content-center align-items-center'>Find latest news of bangladesh and around the world</h1>
        <div>
          <h2 className='d-flex justify-content-center align-items-center'>Too lazy to read the whole news?</h2>
          <div>
            <h2 className='d-flex justify-content-center align-items-center '>Summarize the article or news in seconds in our</h2>
          </div>
          <div className='m-5 '>
              <Link href='/Summarize'><div className='CopyButton d-flex justify-content-center align-items-center'>Summarizer Tool</div></Link>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}
