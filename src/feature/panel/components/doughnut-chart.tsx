import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

interface DoughnutChartProps extends React.HTMLAttributes<HTMLDivElement> {
  portfolio: { ticker: string; weight: number }[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ portfolio, ...props }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart<'doughnut', number[], string> | null>(null);
  const labels = portfolio.map((stock) => stock.ticker);
  const data = portfolio.map((stock) => stock.weight * 100);

  useEffect(() => {
    const canvas = chartRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Allocation',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }
        ]
      },

      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                let label = tooltipItem.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                label += `${(tooltipItem.raw as number).toFixed(2)}%`;
                return label;
              }
            }
          }
        }
      }
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!chartInstanceRef.current) return;

    chartInstanceRef.current.data.labels = labels;
    chartInstanceRef.current.data.datasets[0].data = data;
    chartInstanceRef.current.update();
  }, [portfolio, labels, data]);

  return (
    <div {...props}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default DoughnutChart;
