//import Image from 'next/image';

import CTABanner from '@/feature/cta';
import Explanation from '@/feature/explanation';
import Footer from '@/feature/footer';
import Panel from '@/feature/panel';
import SearchBar from '@/feature/searchbar';

//import hero from '/public/images/hero.jpg';

export default function HomePage() {
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
        <SearchBar />
      </section>
      <section className="flex w-full -translate-y-1/3 justify-center md:-translate-y-1/2">
        <Panel />
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
