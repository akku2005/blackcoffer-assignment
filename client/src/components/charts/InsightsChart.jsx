// src/chart/InsightsChart.jsx
import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import useFetchData from "../../hook/useFetchData";
import Loader from "../../loader/Loader";

ChartJS.register(ArcElement, Tooltip, Legend);

const InsightsChart = () => {
  const [filters, setFilters] = useState({
    endYear: "",
    topic: "",
    sector: "",
    region: "",
    pestle: "",
    source: "",
    swot: "",
    country: "",
    city: "",
  });

  const { data, loading, error } = useFetchData(
    "http://localhost:6060/api/data",
    filters
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mt-10">Insights Chart</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="grid grid-cols-3 gap-4">
          <input
            name="endYear"
            value={filters.endYear}
            onChange={handleChange}
            placeholder="End Year"
            className="p-2 border border-gray-300"
          />
          <input
            name="topic"
            value={filters.topic}
            onChange={handleChange}
            placeholder="Topic"
            className="p-2 border border-gray-300"
          />
          <input
            name="sector"
            value={filters.sector}
            onChange={handleChange}
            placeholder="Sector"
            className="p-2 border border-gray-300"
          />
          <input
            name="region"
            value={filters.region}
            onChange={handleChange}
            placeholder="Region"
            className="p-2 border border-gray-300"
          />
          <input
            name="pestle"
            value={filters.pestle}
            onChange={handleChange}
            placeholder="PEST"
            className="p-2 border border-gray-300"
          />
          <input
            name="source"
            value={filters.source}
            onChange={handleChange}
            placeholder="Source"
            className="p-2 border border-gray-300"
          />
          <input
            name="swot"
            value={filters.swot}
            onChange={handleChange}
            placeholder="SWOT"
            className="p-2 border border-gray-300"
          />
          <input
            name="country"
            value={filters.country}
            onChange={handleChange}
            placeholder="Country"
            className="p-2 border border-gray-300"
          />
          <input
            name="city"
            value={filters.city}
            onChange={handleChange}
            placeholder="City"
            className="p-2 border border-gray-300"
          />
          <button
            type="submit"
            className="col-span-3 bg-blue-500 text-white py-2"
          >
            Apply Filters
          </button>
        </div>
      </form>

      {loading && <Loader />}
      {error && <div>Error fetching data: {error.message}</div>}

      <div className="chart-container mt-10">
        {data.length > 0 && (
          <Bar
            data={{
              labels: data.map((item) => item.topic),
              datasets: [
                {
                  label: "Intensity",
                  backgroundColor: "rgba(75,192,192,0.2)",
                  borderColor: "rgba(75,192,192,1)",
                  borderWidth: 1,
                  data: data.map((item) => item.intensity),
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: "Intensity",
                    font: {
                      size: 16,
                    },
                  },
                },
                x: {
                  title: {
                    display: true,
                    text: "Topic",
                    font: {
                      size: 16,
                    },
                  },
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
            height={400}
            width={600}
          />
        )}
      </div>
      <div className="chart-container mt-10 h-96">
        <h2 className="text-2xl font-semibold mb-4">Pie Chart</h2>
        {data.length > 0 && (
          <Pie
            data={{
              labels: data.map((item) => item.topic),
              datasets: [
                {
                  label: "Intensity",
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                  data: data.map((item) => item.intensity),
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
            height={400}
            width={400}
          />
        )}
      </div>
      <div className="chart-container mt-12 h-96">
        <h2 className="text-2xl font-semibold mb-4  ">Doughnut Chart</h2>
        {data.length > 0 && (
          <Doughnut
            data={{
              labels: data.map((item) => item.topic),
              datasets: [
                {
                  label: "Intensity",
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                  data: data.map((item) => item.intensity),
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
            height={400}
            width={400}
          />
        )}
      </div>
    </div>
  );
};

export default InsightsChart;
