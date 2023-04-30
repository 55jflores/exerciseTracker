import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [navRef]);

  return (
    <nav className="bg-gray-100 dark:bg-gray-800" ref={navRef}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-white hover:text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <p className="text-gray-800 dark:text-white font-bold text-lg">
                datai
              </p>
            </Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/push" >
                  <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                    Push
                  </p>
                </Link>
                <Link href="/pull">
                  <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                    Pull
                  </p>
                </Link>
                <Link href="/legs">
                  <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                    Legs
                  </p>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* Mobile menu, show/hide based on menu state */}
     {menuOpen && (
        <div className=" sm:hidden " id="mobile-menu">
          <div className="absolute px-2 pt-2 pb-3 space-y-1 bg-gray-300 dark:bg-gray-700  p-6 rounded-lg shadow-lg" style={{zIndex:50}}>
            
            <Link href="/push" onClick={() => setMenuOpen(!menuOpen)}>
              <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">
                Push
              </p>
            </Link>

            <Link href="/pull" onClick={() => setMenuOpen(!menuOpen)}>
              <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">
                Pull
              </p>
            </Link>

            <Link href="/legs" onClick={() => setMenuOpen(!menuOpen)}>
              <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover:text-gray-300 dark:hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">
                Legs
              </p>
            </Link>
          
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;