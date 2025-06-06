import React from 'react';
import Hero from "@/components/hero";
import SearchBar from '@/components/SearchBar';
import Trop from '@/components/trop';
import TopD from '@/components/TopD';
import Keep from '@/components/keep';
import TopT from '@/components/TopT';
import Flex from '@/components/Flex';
import Galle from '@/components/Galle';
import CTA from '@/components/cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-[#003A56] min-h-screen">
      <div className="max-w-[95rem] mx-auto bg-[#01293c]">
        <Hero />
        <SearchBar />
        <Trop/>
        <TopD/>
        <Keep/>
        <TopT/>
        <Flex/>
        <Galle/>
        <CTA/>
       <Footer/>
      </div>    
    </main>
  );
}
