// Dashboard.tsx
import React, { useRef } from 'react';
import TableWidget from './widgets/TableWidget'; // Import the TableWidget component
import BarChartWidget from './widgets/BarChartWidget'; // Import the BarChartWidget component

import './Dashboard.css'; // Import your CSS file for styling

interface Widget {
  id: number;
  type: string;
  data: any;
  columns: any;
}

interface DashboardProps {
  widgets: Widget[];
}

type DashboardRef = {
  updateWidgets(newWidgets: Widget[]): void;
};

const Dashboard: React.FC<DashboardProps> = ({ widgets: initialWidgets }) => {
  const [widgets, setWidgets] = React.useState<Widget[]>(initialWidgets);
  const dashboardRef = useRef<DashboardRef | null>(null);

  // Function to update widgets from outside
  const updateWidgets = (newWidgets: Widget[]) => {
    setWidgets(newWidgets);
  };

  React.useImperativeHandle(dashboardRef, () => ({
    updateWidgets,
  }));

  return (
    <div className="dashboard-container">
      {widgets.map((widget) => (
        <div key={widget.id} className="widget">
          {widget.type === 'table' && (
            <TableWidget data={widget.data} columns={widget.columns}/>
          )}
          {widget.type === 'bar-chart' && <BarChartWidget data={widget.data} />}
          {/* Add more widget types as needed */}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
