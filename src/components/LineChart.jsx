import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Line } from "react-chartjs-2";
// import { tokens } from "../theme";

import data from '../components/dataset.json'
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);
const vehicleData=data


const LineChart = ({ isDashboard = false }) => {
   const vehicalename=vehicleData.map((item)=>item['Make'])
 
  const uniqueYears = [...new Set(vehicleData.map(item => item['Model Year']))];

  const makes = vehicleData.map((item) => item['Model Year']);
  const modelYears = vehicleData.map((item) => item["Electric Range"]);
  console.log("uniqueYears",uniqueYears)

  const chartData = {
    labels:  uniqueYears,
    datasets: [{
      label: `Electric Range (miles)`,
      data:  modelYears,
      
      backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, 0.5)`,
      // tension: 0.1,
    }
    ]
  
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Electric Range of Vehicles (2017)",
      },
    },
  };

  return <Line data={chartData} options={options} width="1000" height="250"/>;
}

export default LineChart;
