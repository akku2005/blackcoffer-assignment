// src/pages/ReportsPage.jsx
import React from "react";
import Report from "../pages/Reports";

const sampleReport = {
  end_year: "",
  intensity: 6,
  sector: "Energy",
  topic: "gas",
  insight: "Annual Energy Outlook",
  url: "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
  region: "Northern America",
  start_year: "",
  impact: "",
  added: "January, 20 2017 03:51:25",
  published: "January, 09 2017 00:00:00",
  country: "United States of America",
  relevance: 2,
  pestle: "Industries",
  source: "EIA",
  title:
    "U.S. natural gas consumption is expected to increase during much of the projection period.",
  likelihood: 3,
};

const ReportsPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Reports Page</h1>
      <Report report={sampleReport} />
    </div>
  );
};

export default ReportsPage;
