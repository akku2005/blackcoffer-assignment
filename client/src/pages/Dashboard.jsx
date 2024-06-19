// Dashboard.js

import React from "react";
import InsightsChart from "../components/charts/InsightsChart"; // Adjust path as per your project structure

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-200 rounded-lg">
      <h1 className="text-3xl font-bold mb-5">Dashboard</h1>
      <div className="w-full max-w-4xl flex flex-col items-center justify-center">
        <div className="w-full mb-8 flex flex-col items-center">
          <InsightsChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
