import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

type DoughnutChartProps = React.HTMLAttributes<HTMLDivElement>;

const LineChart: React.FC<DoughnutChartProps> = ({ ...props }) => {
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
        labels: ["Aujourd'hui", '1 an'],
        datasets: [
          {
            label: 'Mise de départ',
            data: [1000, 1000],
            borderColor: 'rgba(255, 99, 132, 0.8)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            fill: true
          },
          {
            label: 'Livret A',
            data: [1000, 1020],
            borderColor: 'rgba(54, 162, 235, 0.8)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 2,
            fill: true
          },
          {
            label: 'Investissement',
            data: [1000, 1139],
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
  }, []);

  return (
    <div {...props}>
      <canvas ref={chartRef} style={{ height: '264px' }}></canvas>
    </div>
  );
};

export default LineChart;
