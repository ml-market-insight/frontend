import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

interface DoughnutChartProps extends React.HTMLAttributes<HTMLDivElement> {
  initial: number;
  prediction: number;
}

const LineChart: React.FC<DoughnutChartProps> = ({ initial, prediction, ...props }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    const canvas = chartRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Aujourd'hui", '10 jours'],
        datasets: [
          {
            label: 'Mise de départ',
            data: [initial, initial],
            borderColor: 'rgba(255, 99, 132, 0.8)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            fill: true
          },
          {
            label: 'Investissement',
            data: [initial, initial * prediction],
            borderColor: 'rgba(255, 159, 64, 0.2)',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderWidth: 2,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: 'white',
              usePointStyle: true,
              pointStyleWidth: 15
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: 'white'
            },
            grid: {
              display: false
            }
          },
          y: {
            ticks: {
              color: 'white',
              padding: 0
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            min: 980
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

    chartInstanceRef.current.data.datasets[0].data = [initial, initial];
    chartInstanceRef.current.data.datasets[1].data = [initial, initial * prediction];
    chartInstanceRef.current.update();
  }, [initial, prediction]);

  return (
    <div {...props}>
      <canvas ref={chartRef} style={{ height: '264px' }}></canvas>
    </div>
  );
};

export default LineChart;
