import LineChart from '../components/line-chart';

interface PredictionProps {
  initial: number;
  prediction: number;
}

const Prediction: React.FC<PredictionProps> = ({ initial, prediction }) => {
  return (
    <section className="flex w-[480px] flex-col justify-center px-4 py-4 text-gray">
      <div className="mt-10 flex flex-col items-center justify-center">
        <h5>Après 10 jours, votre investissement atteindra</h5>
        <h5>
          <span className="text-white">
            {(initial * prediction).toLocaleString('fr-FR', {
              style: 'currency',
              currency: 'EUR'
            })}
          </span>{' '}
          pour un profit net de{' '}
          <span className="text-white">
            {(initial * prediction - initial).toLocaleString('fr-FR', {
              style: 'currency',
              currency: 'EUR'
            })}
          </span>
        </h5>
      </div>

      <LineChart className="my-10" initial={initial} prediction={prediction} />
    </section>
  );
};

export default Prediction;
