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
          Notre simulateur de portefeuille utilise des modèles mathématiques sophistiqués et de
          l'apprentissage machine pour estimer la performance future de votre portefeuille. Vous
          pouvez saisir vos actifs, qu'ils soient des actions NASDAQ ou des paires de devises
          (Forex) pour obtenir des projections sur la performance de votre portefeuille et de ses
          différents actifs. Ainsi, notre programme vous offre la possibilité d'essayer diverses
          configurations de portefeuilles et de comparer les résultats afin de déterminer la
          meilleure répartition d'actifs adaptée à votre profil d'investisseurs.
        </p>
        <h2 className="mt-16 text-accent/70" id="who">
          Pour qui ?
        </h2>
        <p className="text-gray-500 py-4 text-lg">
          Notre outil d'allocation de portefeuille est conçu pour les investisseurs de tous niveaux,
          des débutants aux professionnels. Que vous soyez un investisseur novice à la recherche de
          connaissances initiales sur l'investissement ou un professionnel expérimenté qui souhaite
          affiner sa stratégie d'investissement, notre technologie vous aide à atteindre vos
          objectifs financiers. Les conseillers financiers qui souhaitent assister leurs clients
          dans la prise de décisions d'investissement éclairées peuvent également bénéficier de
          notre solution.
        </p>
        <h2 className="mt-16 text-accent/70" id="why">
          Pourquoi nous faire confiance ?
        </h2>
        <p className="text-gray-500 py-4 text-lg">
          Notre simulateur de portefeuille est basé sur des données historiques précises et des
          modèles mathématiques sophistiqués. Nous mettons jours après jours nos modèles
          d'apprentissage machine pour garantir des projections de performance précises et fiables.
          Notre équipe d'experts en investissement est disponible pour répondre à vos questions et
          vous assister dans l'interprétation plus profonde des résultats de notre simulateur. Notre
          objectif est de vous accompagner dans l'accomplissement de vos objectifs financiers en
          vous offrant les outils et les renseignements nécessaires pour prendre des décisions
          d'investissement éclairées.
        </p>
      </div>
    </div>
  );
};

export default Explanation;
