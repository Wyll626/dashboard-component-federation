// BarChartWidget.tsx
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartWidgetProps {
  data: {
    labels: string[];
    datasets: any[];
  };
  options?: any; // Make options an optional prop
}

const defaultOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const BarChartWidget: React.FC<BarChartWidgetProps> = ({ data, options }) => {

  const mergedOptions = {
    ...defaultOptions,
    ...options, // Merge default options with custom options
  };
  return (
    <div>
      <h2>Bar Chart Widget</h2>
      <Bar data={data} options={mergedOptions} />
    </div>
  );
};

export default BarChartWidget;
