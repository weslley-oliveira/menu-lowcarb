import { useEffect, useState } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'


export default function Home() {
  
  const [offset, setOffset] = useState(0);
   
    useEffect(() => {
      window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
     
    }, []);

    
   
  return (<>
      <Head>
        <title>Menu Low Carb</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
        
      </Head>
    <div className="bg-hero-pattern bg-cover bg-center">
      
      <header className={`fixed w-full text-white ${offset >= 24 && 'bg-white text-black'}`}>
        <Nav siteTitle="Menu Lor Carb"/>
      </header>

      <main className="text-white text-4xl font-semibold flex flex-wrap content-center justify-center h-screen bg-black bg-opacity-50">
        <h1 className="text-5xl text-center">Hello Wolrd</h1>
        <p className="text-base py-8">Esse e o seu menu low carb</p>
      </main>

      <footer className="">
       
      </footer>

    </div>
    <div>
      <h1 className="px-14">teste</h1>

    </div>
  </>)
}

