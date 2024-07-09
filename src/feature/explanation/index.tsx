'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

const Explanation = () => {
  const [scroll, setScroll] = useState<'how' | 'who' | 'why'>('how');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('h2');
      sections.forEach((section) => {
        if (
          section.getBoundingClientRect().top < 100 &&
          section.getBoundingClientRect().top > -100
        ) {
          if (section.id !== scroll) {
            setScroll(section.id as 'how' | 'who' | 'why');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scroll]);

  return (
    <div className="flex flex-row items-start justify-start gap-4">
      <div className="sticky top-4 flex w-1/4 flex-col gap-4 max-md:hidden md:w-1/3">
        <a
          className={cn(
            'border-l-2 border-transparent pl-2 text-xl font-light transition',
            scroll === 'how' && 'border-obsidian'
          )}
          href="#how"
        >
          Comment ça marche ?
        </a>
        <a
          className={cn(
            'border-l-2 border-transparent pl-2 text-xl font-light transition',
            scroll === 'who' && 'border-obsidian'
          )}
          href="#who"
        >
          Pour qui ?
        </a>
        <a
          className={cn(
            'border-l-2 border-transparent pl-2 text-xl font-light transition',
            scroll === 'why' && 'border-obsidian'
          )}
          href="#why"
        >
          Pourquoi nous faire confiance ?
        </a>
      </div>
      <div className="w-3/4 md:w-2/3">
        <h2 className="text-accent/70" id="how">
          Comment ça marche ?
        </h2>
        <p className="text-gray-500 py-4 text-lg">
          Notre simulateur de portefeuille utilise des modèles mathématiques sophistiqués pour
          estimer la performance future de votre portefeuille en fonction de différents scénarios de
          marché. Vous pouvez saisir vos actifs, vos objectifs financiers et votre horizon
          d'investissement pour obtenir des projections personnalisées de la performance de votre
          portefeuille. Notre simulateur vous permet également de tester différentes stratégies
          d'investissement et de comparer les résultats pour trouver la meilleure allocation
          d'actifs pour votre profil d'investisseur.
        </p>
        <h2 className="mt-16 text-accent/70" id="who">
          Pour qui ?
        </h2>
        <p className="text-gray-500 py-4 text-lg">
          Notre simulateur de portefeuille est conçu pour les investisseurs de tous niveaux, des
          débutants aux professionnels. Que vous soyez un investisseur débutant cherchant à
          apprendre les bases de l'investissement ou un professionnel expérimenté cherchant à
          affiner votre stratégie d'investissement, notre simulateur peut vous aider à atteindre vos
          objectifs financiers. Notre simulateur est également utile pour les conseillers financiers
          qui cherchent à aider leurs clients à prendre des décisions d'investissement éclairées.
        </p>
        <h2 className="mt-16 text-accent/70" id="why">
          Pourquoi nous faire confiance ?
        </h2>
        <p className="text-gray-500 py-4 text-lg">
          Notre simulateur de portefeuille est basé sur des données historiques précises et des
          modèles mathématiques sophistiqués. Nous mettons constamment à jour nos algorithmes pour
          garantir des projections de performance précises et fiables. Notre équipe d'experts en
          investissement est disponible pour répondre à vos questions et vous aider à interpréter
          les résultats de notre simulateur. Nous sommes déterminés à vous aider à atteindre vos
          objectifs financiers en vous fournissant les outils et les informations dont vous avez
          besoin pour prendre des décisions d'investissement éclairées.
        </p>
      </div>
    </div>
  );
};

export default Explanation;
