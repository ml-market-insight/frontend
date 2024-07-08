import Step from './components/step';

import Step1 from '/public/images/step1.png';
import Step2 from '/public/images/step2.png';
import Step3 from '/public/images/step3.png';

const Steps = () => {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
      <Step title="1. Créez votre portefeuille" image={Step1}>
        <p>
          Commencez par créer un portefeuille en ajoutant des actifs financiers et en spécifiant les
          quantités détenues.
        </p>
      </Step>
      <Step title="2. Configurez vos paramètres" image={Step2}>
        <p>
          Configurez les paramètres de simulation pour définir les hypothèses de rendement et de
          volatilité des actifs financiers.
        </p>
      </Step>
      <Step title="3. Analysez les résultats" image={Step3}>
        <p>
          Analysez les résultats de la simulation pour obtenir des projections précises de la
          performance de votre portefeuille.
        </p>
      </Step>
    </div>
  );
};

export default Steps;
