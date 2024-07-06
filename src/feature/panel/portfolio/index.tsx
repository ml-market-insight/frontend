import DoughnutChart from '../components/doughnut-chart';
import Input from '../components/input';

interface PortfolioProps {
  initial: number;
  setInitial: (initial: number) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ initial, setInitial }) => {
  return (
    <section className="w-[480px] px-10 py-4">
      <Input
        type="number"
        name="initial"
        label="Initial investment"
        value={initial}
        onChange={(e) => setInitial(Number(e.target.value))}
      />
      <DoughnutChart className="my-10" />
    </section>
  );
};

export default Portfolio;
