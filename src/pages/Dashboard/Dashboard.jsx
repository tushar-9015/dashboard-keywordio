import React, { useState } from "react";
import DataTable from "../../components/DataTable/DataTable";
import {
  campaignRows,
  campaignColumns,
  groupColumns,
  groupRows,
} from "../../data";
import "./dashboard.css";
import { Donut } from "../../components/Chart/Donut";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

function Dashboard() {
  const [showChart, setShowChart] = useState(true);

  const handleChange = (event, _showCart) => {
    setShowChart(_showCart);
  };
  return (
    <div className="dashboard-container">
      <div className="col">
        <DataTable rows={campaignRows} columns={campaignColumns} />
      </div>
      <div className="col ">
        <div className="table-chart">
          {showChart ? (
            <Donut rows={groupRows} columns={groupColumns} />
          ) : (
            <DataTable rows={groupRows} columns={groupColumns} />
          )}

          <ToggleButtonGroup
           sx={{ position: "absolute", bottom: "30px", right: "30px" }}
            value={showChart}
            color="primary"
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value={true}>
              <DonutLargeIcon/>
            </ToggleButton>
            <ToggleButton value={false}>
              <TableChartOutlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
