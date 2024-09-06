import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import About from '../pages/about/index'

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-custom-white fixed top-0 left-0 pl-12 right-0 z-20">
        <div className="justify-between max-w-full px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:gap-40 md:px-2 md:mx-2">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/" className='flex flex-row gap-4'>
                <Image
                  src="/logo.png"
                  width={40}
                  height={35}
                  alt="logo"
                />
                <h2 className=" text-4xl md:text-4xl mt-2 text-black font-sacramento font-normal">Whingan</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-custom-green rounded-md outline-none focus:underline focus:underline-offset-2 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/xmark.svg" width={30} height={30} alt="close menu" />
                  ) : (
                    <Image
                      src="/nav.svg"
                      width={30}
                      height={30}
                      alt="open menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className='flex ml-10'>
            <div
              className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <div className='flex  flex-col md:flex-row'>
                <ul className="flex flex-col md:flex-row w-full items-center justify-center md:items-end md:justify-end md:gap-4 md:h-auto mt-0 md:mt-4 ">
                  <li className="pb-6 text-xl font-neuemachina font-light text-custom-green py-2 md:px-6 text-center hover:underline hover:decoration-custom-orange hover:underline-offset-2">
                    <Link href="/about" onClick={() => setNavbar(!navbar)}>
                      About
                    </Link>
                  </li>
                  <li className="pb-6 text-xl font-neuemachina font-light text-custom-green py-2 md:px-6 text-center md:hover:underline md:hover:decoration-custom-orange md:hover:underline-offset-2">
                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                      Foundation
                    </Link>
                  </li>
                  <li className="pb-6 text-xl font-neuemachina font-light text-custom-green py-2 md:px-6 text-center md:hover:underline md:hover:decoration-custom-orange md:hover:underline-offset-2">
                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                      Projects
                    </Link>
                  </li>
                </ul>
                <div className="flex justify-center md:justify-start">
                  <Link href="/">
                    <button className="bg-custom-grey text-xl text-custom-orange px-4 py-2 border-2 rounded-l-full rounded-r-full border-custom-orange rounded-2xl md:ml-10 md:mt-4 hover:bg-custom-orange hover:text-custom-white">
                      CONTACT
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;