import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
  
const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services',},
  { href: '/portfolio', label: 'Portfolio',},
  { href: '/about-us', label: 'About Us' },
  { href: '/contact', label: 'Contact' }  
]

// Inserir no style global
// @media (max-width: 640px) {                  
//   .content-to-hide {
//      display: none;
//   }
// }

// icons nescessario

export default function Nav({siteTitle}) {   

  const [ toogle, setToogleInput ] = useState(false);
    
  const handleMore = (e) => {
    e.preventDefault();
    setToogleInput(true)
  }

  const handleLess = (e) => {
    e.preventDefault();
    setToogleInput(false)
  }

  return (
    <nav className="shadow-lg">
      <div className="py-2 grid grid-cols-3 sm:grid-cols-6 items-center">
          <div className="pl-4 col-span-2">
            <Link href="/">
              <span className="font-logo text-2xl">Menu Low Carb</span>           
            </Link>
          </div>
          <div className="content-to-hide sm:col-span-4">
            <ul className="p-4 flex">
              {links.map(({ href, label}) => (           
                <li className="p-2" key={`${href}${label}`}>
                  <Link href={href}>
                    <a  className="no-underline text-base font-semibold px-4 hover:text-blue-500">{label}</a>
                  </Link>                           
                </li>
              ))}
            </ul>
          </div>
          {!toogle && <div className="justify-self-end w-14 pr-4 sm:hidden">
            {/* <img className="transform hover:rotate-90"  src="/icons/menu.svg"></img> */}
            <svg 
            onClick={handleMore}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentcolor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>}
          {toogle && <div className="justify-self-end w-14 pr-4 ">
            {/* <img  src="/icons/x.svg"></img> */}
            <svg
              onClick={handleLess}
              xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentcolor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>}      
      </div>
       
      {toogle &&
      <div className="transition ease-in duration-700">
        <ul className="p-4">
          {links.map(({ href, label}) => (           
            <li className="p-2 border-b" key={`${href}${label}`}>
              <Link href={href}>
                <a  className="no-underline text-base font-semibold px-4 hover:text-blue-500">{label}</a>
              </Link>                           
             </li>
          ))}
        </ul>
      </div> 
      }     
    </nav>
  )
}