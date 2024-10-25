
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import data from '../components/dataset.json'


ChartJS.register(ArcElement, Tooltip, Legend);


const vehicleData=data
const PieChart = () => {
 
   // Extract the CAFV eligibility data and count occurrences
   const cafvCounts = vehicleData.reduce((acc, vehicle) => {
    const cafvStatus = vehicle['Electric Vehicle Type'];
    acc[cafvStatus] = (acc[cafvStatus] || 0) + 1;
    return acc;
  }, {});

  // Prepare data for the pie chart
  const data = {
    labels: Object.keys(cafvCounts),
    datasets: [
      {
        data: Object.values(cafvCounts),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colors for each segment
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2>Electric Vehicle Type</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
