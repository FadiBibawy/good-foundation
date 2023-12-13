import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Logoimg from '../../public/images/GFLogo.png';
import Image from 'next/image';

const Hero = () => {
  const { status: sessionStatus } = useSession();
  const [showMenu, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility(!showMenu);
  const { t } = useTranslation();

  const style = { height: '100vh' };
  return (
    <div className="w-full py-10">
      <div
        className="relative flex flex-col px-10 mx-auto space-y-5 md:w-3/4"
        style={style}
      >
        <header className="flex items-center justify-between space-x-3">
          <Link href="/" className="text-2xl font-bold">
            <Image src={Logoimg} width={200} alt="Logo picture"></Image>
          </Link>

          <button className="md:hidden" onClick={toggleMenu}>
            {!showMenu ? (
              <Bars3Icon className="w-8 h-8" />
            ) : (
              <XMarkIcon className="w-8 h-8" />
            )}
          </button>

          <div
            className={[
              'items-center justify-center md:flex-row md:flex md:relative md:bg-transparent md:shadow-none md:top-0 md:backdrop-blur-none md:space-x-3',
              showMenu
                ? 'absolute z-50 flex flex-col py-5 space-x-0 rounded shadow-xl md:py-0 left-8 right-8 bg-white top-24 space-y-3 md:space-y-0 px-5'
                : 'hidden',
            ].join(' ')}
          >
            <nav className="flex flex-col w-full space-x-0 space-y-3 text-center md:space-y-0 md:space-x-3 md:flex-row">
              <Link
                href="#services"
                scroll={false}
                className="px-5 py-2 rounded hover:bg-gray-100"
              >
                {t('Services')}
              </Link>
              {/* <a className="px-5 py-2 rounded hover:bg-gray-100">
                {t('common.label.pricing')}
              </a>
              <a className="px-5 py-2 rounded hover:bg-gray-100">
                {t('common.label.blog')}
              </a> */}
            </nav>
            <Link
              href={
                // sessionStatus === 'authenticated' ? '/account' : '/auth/login'
                '#contact'
              }
              className="w-full px-5 py-2 text-center text-white bg-blue-600 rounded shadow hover:bg-blue-500"
              scroll={false}
            >
              {/* {sessionStatus === 'authenticated' ? 'Go to Dashboard' : 'Login'} */}
              Contact us
            </Link>
          </div>
        </header>
        <div className="flex flex-col items-center justify-center pt-10 mx-auto md:w-3/5">
          <h1 className="text-5xl font-extrabold text-center">
            <span className="block">Good Foundation Group</span>
            <span className="block text-blue-600 text-3xl mt-3">
              In Florida
            </span>
          </h1>
          <p className="mt-10 text-center text-gray-600">
            At Good Foundation Construction* LLC, we believe there is more to
            value than just the lowest price. That&apos;s why we provide our
            clients with the highest quality product for the most economical
            price.
            <br />
            <br />
            As a full-service contractor, we provide the complete range of
            construction services to diverse industries, including commercial,
            industrial, institutional, and medical. We can either work with your
            existing plans or provide you with the comprehensive design/build
            solutions.
          </p>
        </div>
        <div className="flex items-center justify-center space-x-5 pt-16">
          <Link
            href="#contact"
            className="px-10 py-3 text-center text-white bg-blue-600 rounded shadow hover:bg-blue-500"
          >
            Contact Us
          </Link>
          {/* <a className="px-10 py-3 text-center text-blue-600 rounded shadow hover:bg-blue-50">
            Live Demo
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
