import Head from 'next/head'
import { Inter } from '@next/font/google'
import Sidebar from 'components/Sidebar'
import {Feed} from '../components/Feed'
import Widgets from '../components/Widgets'
import  CommentModal from '../components/CommentModal'

const inter = Inter({ subsets: ['latin'] })

export default function Home({newsResults, randomUsersResults}) {
  return (
    <>
      <Head>
        <title>Social App</title>
        <meta name="description" content="Enjoy The Way You Wish" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
       <main className='flex min-h-screen  mx-auto '>
        {/* sidebar */}
        <Sidebar />

        {/* feed */}
        <Feed />

        {/* widget */}
        <Widgets  newsResults = {newsResults.articles} randomUsersResults={randomUsersResults.results}/>
        

        {/*modal  */}
       <CommentModal />
       </main>
    </>
  )
}

//https://saurav.tech/NewsAPI/top-headlines/category/business/us.json
export async function getServerSideProps() {
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res)  => res.json());

  //  who to follow 

  const randomUsersResults = await fetch(
    "https://randomuser.me/api/?results=100&inc=name,login,picture"
  ).then((res) =>res.json());
  return{
    props:{
      newsResults,
      randomUsersResults,
    },
  }
}