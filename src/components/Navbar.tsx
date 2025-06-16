// src/components/Navbar.tsx
'use client'; // Indica que este é um Componente Cliente (para interatividade com JS)

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faBars, faChevronDown, faPaperPlane, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { FaChild, FaBars, FaChevronDown, FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaArrowUp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faChild} className="text-3xl text-amber-500 mr-2" />
          <span className="text-xl font-bold text-gray-800">ASSOCIAÇÃO ESPAÇO CURUMIM</span>
        </div>

        {/* Mobile menu button */}
        <button id="mobile-menu-button" className="md:hidden text-gray-600 focus:outline-none" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="nav-link text-gray-700 hover:text-amber-500 font-medium">Início</Link>
          <Link href="/sobre" className="nav-link text-gray-700 hover:text-amber-500 font-medium">Sobre</Link>
          <Link href="/projetos" className="nav-link text-gray-700 hover:text-amber-500 font-medium">Projetos</Link>
          <Link href="/como-ajudar" className="nav-link text-gray-700 hover:text-amber-500 font-medium">Como Ajudar</Link>
          <Link href="/contato" className="nav-link text-gray-700 hover:text-amber-500 font-medium">Contato</Link>

          {/* Submenu Mais */}
          <div className="relative group">
            <button className="nav-link text-gray-700 hover:text-amber-500 font-medium focus:outline-none">
              Mais <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-sm" />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md py-2 w-48 z-50">
              <Link href="/eventos" className="block px-4 py-2 text-gray-700 hover:bg-amber-100">Eventos</Link>
              <Link href="/voluntarios" className="block px-4 py-2 text-gray-700 hover:bg-amber-100">Voluntários</Link>
              <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-amber-100">Blog</Link>
              <Link href="/diretoria" className="block px-4 py-2 text-gray-700 hover:bg-amber-100">Diretoria</Link>
              <Link href="/conselho-fiscal" className="block px-4 py-2 text-gray-700 hover:bg-amber-100">Conselho Fiscal</Link>
              <Link href="/politica-de-cookies" className="block px-4 py-2 text-gray-700 hover:bg-amber-100">Política de Cookies</Link>
              <Link href="/politica-de-privacidade" className="block px-4 py-2 text-gray-700 hover:bg-amber-100">Política de Privacidade</Link>
            </div>
          </div>

          <Link href="/doar" className="bg-amber-500 text-white px-4 py-2 rounded-full font-medium hover:bg-amber-600">Doar</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`md:hidden bg-white w-full px-4 py-2 shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <Link href="/" className="block py-2 text-gray-700 hover:text-amber-500 font-medium" onClick={toggleMobileMenu}>Início</Link>
        <Link href="/sobre" className="block py-2 text-gray-700 hover:text-amber-500 font-medium" onClick={toggleMobileMenu}>Sobre</Link>
        <Link href="/projetos" className="block py-2 text-gray-700 hover:text-amber-500 font-medium" onClick={toggleMobileMenu}>Projetos</Link>
        <Link href="/como-ajudar" className="block py-2 text-gray-700 hover:text-amber-500 font-medium" onClick={toggleMobileMenu}>Como Ajudar</Link>
        <Link href="/contato" className="block py-2 text-gray-700 hover:text-amber-500 font-medium" onClick={toggleMobileMenu}>Contato</Link>

        {/* Submenu Mais no Mobile */}
        <details className="py-2">
          <summary className="cursor-pointer text-gray-700 hover:text-amber-500 font-medium">Mais</summary>
          <div className="pl-4 mt-2">
            <Link href="/eventos" className="block py-2 text-gray-700 hover:text-amber-500" onClick={toggleMobileMenu}>Eventos</Link>
            <Link href="/voluntarios" className="block py-2 text-gray-700 hover:text-amber-500" onClick={toggleMobileMenu}>Voluntários</Link>
            <Link href="/blog" className="block py-2 text-gray-700 hover:text-amber-500" onClick={toggleMobileMenu}>Blog</Link>
            <Link href="/diretoria" className="block py-2 text-gray-700 hover:text-amber-500" onClick={toggleMobileMenu}>Diretoria</Link>
            <Link href="/conselho-fiscal" className="block py-2 text-gray-700 hover:text-amber-500" onClick={toggleMobileMenu}>Conselho Fiscal</Link>
            <Link href="/politica-de-cookies" className="block py-2 text-gray-700 hover:text-amber-500" onClick={toggleMobileMenu}>Política de Cookies</Link>
            <Link href="/politica-de-privacidade" className="block py-2 text-gray-700 hover:text-amber-500" onClick={toggleMobileMenu}>Política de Privacidade</Link>
          </div>
        </details>

        <Link href="/doar" className="block bg-amber-500 text-white px-4 py-2 rounded-full font-medium my-2 text-center" onClick={toggleMobileMenu}>Doar</Link>
      </div>
    </nav>
  );
}