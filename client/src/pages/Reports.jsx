// import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import axios from "axios";
// import "tailwindcss/tailwind.css";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const ReportsPage = () => {
//   const [reports, setReports] = useState([]);
//   const [filters, setFilters] = useState({
//     dateFrom: "",
//     dateTo: "",
//     category: "",
//   });

//   useEffect(() => {
//     // Fetch reports data from API
//     const fetchReports = async () => {
//       try {
//         const response = await axios.get("http://localhost:6060/api/reports");
//         setReports(response.data);
//       } catch (error) {
//         console.error("Error fetching reports data", error);
//       }
//     };

//     fetchReports();
//   }, []);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: value,
//     }));
//   };

//   const handleFilterSubmit = (e) => {
//     e.preventDefault();
//     // Add filter logic here
//   };

//   const data = {
//     labels: reports.map((report) => report.category),
//     datasets: [
//       {
//         label: "Number of Reports",
//         data: reports.map((report) => report.count),
//         backgroundColor: "rgba(75,192,192,0.2)",
//         borderColor: "rgba(75,192,192,1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Reports Page</h1>

//       <form onSubmit={handleFilterSubmit} className="mb-4">
//         <div className="grid grid-cols-3 gap-4">
//           <input
//             name="dateFrom"
//             value={filters.dateFrom}
//             onChange={handleFilterChange}
//             type="date"
//             placeholder="From Date"
//             className="p-2 border border-gray-300"
//           />
//           <input
//             name="dateTo"
//             value={filters.dateTo}
//             onChange={handleFilterChange}
//             type="date"
//             placeholder="To Date"
//             className="p-2 border border-gray-300"
//           />
//           <input
//             name="category"
//             value={filters.category}
//             onChange={handleFilterChange}
//             placeholder="Category"
//             className="p-2 border border-gray-300"
//           />
//           <button
//             type="submit"
//             className="col-span-3 bg-blue-500 text-white py-2"
//           >
//             Apply Filters
//           </button>
//         </div>
//       </form>

//       <div className="chart-container mb-10">
//         <Bar
//           data={data}
//           options={{
//             responsive: true,
//             maintainAspectRatio: false,
//             scales: {
//               y: {
//                 beginAtZero: true,
//                 title: {
//                   display: true,
//                   text: "Count",
//                   font: {
//                     size: 16,
//                   },
//                 },
//               },
//               x: {
//                 title: {
//                   display: true,
//                   text: "Category",
//                   font: {
//                     size: 16,
//                   },
//                 },
//               },
//             },
//             plugins: {
//               legend: {
//                 display: true,
//               },
//             },
//           }}
//           height={400}
//           width={600}
//         />
//       </div>

//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="py-2 border-b">ID</th>
//             <th className="py-2 border-b">Date</th>
//             <th className="py-2 border-b">Category</th>
//             <th className="py-2 border-b">Title</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reports.map((report) => (
//             <tr key={report.id}>
//               <td className="py-2 border-b text-center">{report.id}</td>
//               <td className="py-2 border-b text-center">{report.date}</td>
//               <td className="py-2 border-b text-center">{report.category}</td>
//               <td className="py-2 border-b text-center">{report.title}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ReportsPage;
import React, { useState, useEffect } from "react";
import Report from "../components/ReportsPage";
import Loader from "../loader/Loader";

const ReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:6060/api/data")
      .then((response) => response.json())
      .then((data) => {
        setReports(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Reports Page</h1>
      <div className="grid grid-cols-1 gap-6">
        {reports.map((report, index) => (
          <Report key={index} report={report} />
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;
