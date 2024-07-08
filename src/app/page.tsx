//import Image from 'next/image';

import Panel from '@/feature/panel';
import SearchBar from '@/feature/searchbar';
import Steps from '@/feature/steps';

//import hero from '/public/images/hero.jpg';

export default function HomePage() {
  return (
    <main>
      <section className="min-h-screen bg-dark p-12 md:p-24">
        <div className="m-auto flex max-w-[512px] flex-col gap-4 text-center">
          <h1 className="inline-block bg-gradient-to-r from-accent to-accentdark bg-clip-text text-transparent">
            Hello, World!
          </h1>
          <p className="text-gray">
            Explorez vos stratégies d'investissement avec notre simulateur de portefeuille
            performant. Obtenez des projections précises de la performance de votre portefeuille,
            analysez les facteurs de risque et trouvez la meilleure allocation d'actifs adaptée à
            vos objectifs financiers.
          </p>
        </div>
        {/* <Image src={hero} alt="Hero" className='absolute top-0 left-0 -z-10'/> */}
        <SearchBar />
      </section>
      <section className="flex w-full -translate-y-1/2 justify-center">
        <Panel />
      </section>
      <section className="flex min-h-screen flex-col gap-16 px-12">
        <h2 className="bg-gradient-to-r from-accent to-accentdark bg-clip-text text-transparent">
          Comment ça marche ?
        </h2>
        <Steps />
      </section>
    </main>
  );
}
