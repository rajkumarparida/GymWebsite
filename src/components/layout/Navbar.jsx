import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Programs', path: '/programs' },
    { label: 'Membership', path: '/membership' },
    { label: 'Trainers', path: '/trainers' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Transformations', path: '/transformations' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link
            to="/"
            className="font-bold text-2xl tracking-wide"
          >
            <span className="text-red-500">AD</span>
            <span className="text-white"> FITNESS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-medium transition-all duration-300
        ${isActive
                    ? 'text-red-500'
                    : 'text-white hover:text-red-500'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}

                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-red-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0'
                        }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="px-5 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6"
          >
            <div className="flex flex-col gap-2">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg transition-all ${isActive
                      ? 'bg-red-500/10 text-red-500 border-l-4 border-red-500'
                      : 'text-white hover:bg-zinc-800 hover:text-red-500'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 px-4 py-3 text-center border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all"
              >
                Get Started
              </Link>

            </div>
          </motion.div>
        )}

      </div>
    </nav>
  );
};