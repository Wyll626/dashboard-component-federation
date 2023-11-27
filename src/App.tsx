// App.tsx
import React from 'react';
import Dashboard from './Dashboard';
import faker from 'faker';

const App: React.FC = () => {

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
  const widgets = [
    {
      id: 0,
      type: 'bar-chart',
      data
    },  {
      id: 1,
      type: 'table',
      data:[
        {
          firstName: 'John',
          lastName: 'Doe',
          // Other properties corresponding to column accessors...
        },
        {
          firstName: 'Jane',
          lastName: 'Smith',
          // Other properties corresponding to column accessors...
        },
        // Add more data objects for additional rows...
      ],columns:[
        {
          accessor: 'firstName', 
          header: 'First Name', 
          cell: (info: any) => info.getValue(), 
          footer: 'Footer Content', 
        },
        {
          accessor: 'lastName',
          header: 'Last Name',
          cell: (info: any) => <i>{info.getValue()}</i>, 
        },
        // Add more column definitions as needed...
      ]
      
    },
  ];

  return (
    <div>
      <h1>My Dashboard</h1>
      <Dashboard widgets={widgets} />
    </div>
  );
};

export default App;
