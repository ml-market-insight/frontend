import LineChart from '../components/line-chart';

const Prediction = () => {
  return (
    <section className="flex w-[480px] flex-col justify-center px-4 py-4 text-gray">
      <div className="mt-10 flex flex-col items-center justify-center">
        <h5>Après 1 ans, votre investissement atteindra</h5>
        <h5>
          <span className="text-white">1139 €</span> pour un profit net de{' '}
          <span className="text-white">139 €</span>
        </h5>
      </div>

      <LineChart className="my-10" />
    </section>
  );
};

export default Prediction;
