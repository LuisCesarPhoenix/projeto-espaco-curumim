// src/components/Footer.tsx
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faMapMarkerAlt, faPhone, faEnvelope, faPaperPlane, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faChild} className="text-3xl text-amber-500 mr-2" />
              <span className="text-xl font-bold">Associação Espaço Curumim</span>
            </div>
            <p className="text-gray-400">Transformando vidas e construindo futuros desde 2009.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Início</Link></li>
              <li><Link href="/sobre" className="text-gray-400 hover:text-white">Sobre Nós</Link></li>
              <li><Link href="/projetos" className="text-gray-400 hover:text-white">Projetos</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="/contato" className="text-gray-400 hover:text-white">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-amber-500 mt-1 mr-2" />
                <span>Rua Alameda Eduardo Prado, 310,<br/>Campos Elíseos – São Paulo, SP.<br/>CEP 01218-012</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-amber-500 mr-2" />
                <span>(11) 97737-0043 WhatsApp<br/>(11) 3333-6777 Fixo</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-amber-500 mr-2" />
                <span>curumim@associacaoespacocurumim.org.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Assine nossa newsletter e receba nossas novidades.</p>
            <form className="flex">
              <input type="email" placeholder="Seu e-mail" className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-800 w-full" />
              <button type="submit" className="bg-amber-500 px-4 py-2 rounded-r-lg hover:bg-amber-600">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2025 Associação Espaço Cururmim. Todos os direitos reservados.</p>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/associacaoespacocurumim/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faFacebookF} /></Link>
            <Link href="https://www.instagram.com/associacaoespacocurumim/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link href="https://www.linkedin.com/company/associa%C3%A7%C3%A3o-espa%C3%A7o-curumim/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
            <Link href="https://www.youtube.com/@AEC-Curumim/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faYoutube} /></Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-amber-500 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </footer>
  );
}