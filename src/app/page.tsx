'use client';

import { DocumentIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { Stock } from '@/lib/models';
import { cn } from '@/lib/utils';

import CTABanner from '@/feature/cta';
import Explanation from '@/feature/explanation';
import Footer from '@/feature/footer';
import Panel from '@/feature/panel';
import SearchBar from '@/feature/searchbar';

export default function HomePage() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedStocks, setSelectedStocks] = useState<Stock[]>([]);
  const [reset, setReset] = useState(true);

  const fetchStocks = async () => {
    const response = await axios.get(process.env.NEXT_PUBLIC_SERVER_URL + '/fetchAllTickers', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    return response.data;
  };

  useEffect(() => {
    setLoading(true);
    fetchStocks().then((data) => {
      setStocks(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (reset) {
      setSelectedStocks([]);
    }
  }, [reset]);

  return (
    <main>
      <section className="min-h-screen bg-dark p-12 md:p-24">
        <div className="m-auto flex flex-col items-center gap-4 text-center">
          <h1 className="inline-block max-w-[512px] bg-gradient-to-r from-accent to-accentdark bg-clip-text text-2xl text-transparent md:text-4xl">
            Simulez votre portefeuille d'investissement
          </h1>
          <p className="max-w-[768px] text-gray">
            Explorez vos stratégies d'investissement avec notre simulateur de portefeuille
            performant. Obtenez des projections précises de la performance de votre portefeuille et
            trouvez la meilleure allocation d'actifs adaptée à vos objectifs financiers.
          </p>
        </div>
        {/* <Image src={hero} alt="Hero" className='absolute top-0 left-0 -z-10'/> */}
        <SearchBar
          stocks={stocks}
          loading={loading}
          selectedStocks={selectedStocks}
          setSelectedStocks={setSelectedStocks}
        />
      </section>
      <section className="mx-auto flex w-[960px] -translate-y-32 flex-col justify-center gap-4">
        <Panel selectedStocks={selectedStocks} reset={reset} setReset={setReset} />
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setReset(true)}
            type="button"
            className="focus:ring-gray-500 inline-flex items-center rounded-lg border border-lightgrey bg-obsidian px-8 py-3 text-center text-sm font-medium text-white hover:bg-obsidian/80 focus:outline-none focus:ring-4"
          >
            Nouvelle simulation
          </button>
          <a
            href={process.env.NEXT_PUBLIC_SERVER_URL + '/download'}
            type="button"
            className={cn(
              'focus:ring-gray-500 inline-flex items-center rounded-lg border border-lightgrey bg-obsidian px-8 py-3 text-center text-sm font-medium text-white hover:bg-obsidian/80 focus:outline-none focus:ring-4',
              reset && 'pointer-events-none opacity-90'
            )}
          >
            <DocumentIcon className="mr-2 h-5 w-5" />
            Télécharger le rapport
          </a>
        </div>
      </section>
      <section className="mb-36 px-12">
        <Explanation />
      </section>
      {/* <section className="flex -translate-y-64 flex-col gap-16 px-12 md:-translate-y-32">
        <h1 className="inline-block bg-gradient-to-r from-accent to-accentdark bg-clip-text text-transparent">
          Comment ça marche ?
        </h1>
        <Steps />
      </section> */}
      <CTABanner />
      <Footer />
    </main>
  );
}
