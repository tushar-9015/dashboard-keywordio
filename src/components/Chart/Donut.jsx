import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Paper, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { capitalize } from "../../utils/string";

import "./chart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = (title, dataValues, labels) => {
//   return {
//     // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     labels,
//     datasets: [
//       {
//         // label: '# of Votes',
//         label: title,
//         // data: [12, 19, 3, 5, 2, 3],
//         data: dataValues,
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           // 'rgba(75, 192, 192, 0.2)',
//           // 'rgba(153, 102, 255, 0.2)',
//           // 'rgba(255, 159, 64, 0.2)',
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           // 'rgba(75, 192, 192, 1)',
//           // 'rgba(153, 102, 255, 1)',
//           // 'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };
// };

export function Donut({ rows, columns }) {
  const [selectedProperty, setSelectedProperty] = useState("clicks");

  const labels = rows.map((row) => row.name);
  const dataValues = React.useMemo(
    () => rows.map((row) => row[selectedProperty]),
    [selectedProperty]
  );

  const properties = columns
    .map((column) => column.label)
    .filter((property) => property !== "groups");

  const percentage = (array, value) => {
    const sum = array.reduce((total, curr) => total + curr);
    return ((100 * value) / sum).toFixed(2);
  };

  const data = {
    labels: labels.map(
      (label, idx) => `${percentage(dataValues, dataValues[idx])}% ${label}`
    ),
    datasets: [
      {
        data: dataValues,
        backgroundColor: ["#FF823C", "#0096FF", "#323C46"],
        borderColor: ["white", "white", "white"],
        borderWidth: 5,
      },
    ],
  };

  const options = {
    cutout: '60%',
    radius: '80%',
    layout: {
      autoPadding: false,
padding : 0,
    },
    plugins: {
       legend: {
          position: 'right',
          labels: {
font: {
  size: 14,
}, padding: 10
          }
       }
    }
 }

  return (

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
            borderBottom: 1,
            borderColor: "grey.300",
            px: "10px",
            py: "10px",
            flex: '0 0 auto',
          }}
        >
          <Typography sx={{ color: "grey.800", fontsize: "16px" }}>
            Ad Insights
          </Typography>

          <select
            style={{ marginLeft: "auto" }}
            className="form-select"
            value={selectedProperty}
            onChange={(event) => setSelectedProperty(event.target.value)}
          >
            {properties.map((property, index) => (
              <option key={index} value={property}>
                {capitalize(property)}
              </option>
            ))}
          </select>
          <HelpOutlineIcon sx={{ fontsize: "small", color: "grey.300" }} />
        </Box>
        <div className="chart-container">
          <Doughnut data={data} options={options} />
        </div>
      </Box>
  );
}
