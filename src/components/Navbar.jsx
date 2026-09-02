import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Sobre', to: '/sobre' },
  { name: 'Núcleos', to: '/nucleos' },
  { name: 'Projetos de P&D', to: '/projetos-pd' },
  { name: 'Pesquisa', to: '/pesquisa' },
  { name: 'Institucional', to: '/institucional' },
  { name: 'Contato', to: '/contato' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-sm font-bold transition-all hover:text-[#2EC4B6] ${isActive ? 'text-[#2EC4B6]' : 'text-slate-600'}`;

  const mobileLinkClass = ({ isActive }) =>
    `text-left text-base font-bold transition-all ${isActive ? 'text-[#2EC4B6]' : 'text-slate-700'}`;

  const goPartner = () => {
    navigate('/contato');
    setMobileOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      style={mobileOpen ? { backgroundColor: '#ffffff' } : undefined}
      className={`fixed w-full z-50 transition-[padding,box-shadow] duration-500 ${mobileOpen ? 'shadow-sm py-4' : scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center space-x-3 cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-[#0D3B66] to-[#2EC4B6] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Brain size={22} />
          </div>
          <div>
            <span className="text-xl font-black tracking-tighter text-slate-900">IBDIA</span>
          </div>
        </Link>

        <div className="hidden lg:flex space-x-7 items-center">
          {navLinks.map(link => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
          <button onClick={goPartner} className="bg-[#0D3B66] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:bg-slate-800 transition-all active:scale-95">
            Seja Parceiro
          </button>
        </div>

        <button className="lg:hidden text-slate-900" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden container mx-auto px-6 pt-6 pb-2 flex flex-col space-y-4">
          {navLinks.map(link => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setMobileOpen(false)} className={mobileLinkClass}>
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
