import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { Bar } from "react-chartjs-2";
import { tokens } from "../theme";

import data from '../components/dataset.json'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const vehicleData=data
const calculateVehicleCounts = (data) => {
  const counts = {};
  data.forEach((item) => {
    const key = `${item.Make}_${item["Model Year"]}`;
    counts[key] = (counts[key] || 0) + 1;
  });
  return counts;
};

const BarChart = ({ isDashboard = false }) => {
  const counts = calculateVehicleCounts(vehicleData);
  const makes = [...new Set(vehicleData.map((item) => item.Make))];
  const modelYears = [...new Set(vehicleData.map((item) => item["Model Year"]))].sort();

  const chartData = {
    labels: makes,
    datasets: modelYears.map((year) => ({
      label: `Model Year ${year}`,
      data: makes.map((make) => counts[`${make}_${year}`] || 0),
      backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, 0.5)`,
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
