import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

type DoughnutChartProps = React.HTMLAttributes<HTMLDivElement>;

const DoughnutChart: React.FC<DoughnutChartProps> = ({ ...props }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart<'doughnut', number[], string> | null>(null);

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
        labels: ['AAPL', 'AMZN', 'TSLA', 'MSFT', 'GOOGL'],
        datasets: [
          {
            label: 'Allocation',
            data: [30, 20, 10, 10, 30],
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
  }, []);

  return (
    <div {...props}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default DoughnutChart;
