/*
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
*/

// src/app/page.tsx
'use client'; // Indica que este é um Componente Cliente

import { useEffect, useRef } from 'react';
// import Navbar from '@/components/Navbar'; // Importa o componente Navbar
import Footer from '@/components/Footer'; // Importa o componente Footer

export default function Home() {
  const headerRef = useRef<HTMLElement>(null);

  // Efeito para a animação fade-in do header
  useEffect(() => {
    const headerElement = headerRef.current;
    if (headerElement) {
      // Set initial state for fade-in
      headerElement.style.opacity = '0';
      headerElement.style.transition = 'opacity 0.6s ease-in';

      const fadeInOnScroll = () => {
        const elementTop = headerElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
          headerElement.style.opacity = '1';
        }
      };

      // Trigger on load
      fadeInOnScroll();

      // Add scroll listener
      window.addEventListener('scroll', fadeInOnScroll);

      // Cleanup listener on component unmount
      return () => {
        window.removeEventListener('scroll', fadeInOnScroll);
      };
    }
  }, []);

  return (
    <div className="font-sans bg-gray-50">
      {/* <Navbar /> */} 

      {/* Hero Section */}
      <header
        ref={headerRef} // Atribui a ref para controlar a animação
        className="bg-gradient-to-r from-amber-500 to-amber-600 text-white mt-16"
      >
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nosso Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">Histórias inspiradoras, notícias e reflexões sobre nosso trabalho</p>
        </div>
      </header>

      {/* Conteúdo principal da página - O HTML original não tinha conteúdo principal aqui,
          mas você adicionaria os posts do blog, categorias, etc., nesta seção.
          Por exemplo:
          <main className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Últimas Publicações</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              // Aqui iriam os cards do blog
            </div>
          </main>
      */}

      <Footer />
    </div>
  );
}