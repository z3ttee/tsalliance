import type { NextPage } from 'next'
import Head from 'next/head'
import AppServiceCard from '../components/card/ServiceCard'
import AppHeader from '../components/header/Header'

const Home: NextPage = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Head>
        <title>TSAlliance :: Portal</title>
        <meta name="description" content="TSAlliance Portal" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className='flex flex-col flex-1 gap-4 h-full w-full justify-start items-center'>
        <div className='w-full'>
          <AppHeader />
        </div>
        
        <div className='flex flex-1 flex-col justify-center gap-24 w-full text-center flex-grow p-window overflow-y-auto'>
          <div>
            <h6 className='text-font-secondary'>Welcome to</h6>
            <h1>TSAlliance</h1>
          </div>

          <div className='flex flex-wrap items-start justify-center gap-8'>
            <AppServiceCard name='Soundcore' url='https://soundcore.tsalliance.eu' bannerSrc='/img/services/soundcore_logo_full.png' />
            <AppServiceCard name='Easternexploration' url='https://easternexploration.de' bannerSrc='/img/services/easternexploration_banner.jpg' />
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Home
