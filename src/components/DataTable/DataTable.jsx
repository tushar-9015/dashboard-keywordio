import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import DataTableHead from "./Header";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function DataTable({ rows, columns }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("cost");

  const handleRequestSort = (event, property) => {
    console.log(property);
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedRows = React.useMemo(
    () =>
      rows.sort((a, b) => {
        let toReturn =
          order === "asc" ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy];
        return toReturn == 0 ? a["id"] - b["id"] : toReturn;
      }),
    [order, orderBy]
  );

  const total = (property) =>
    rows.reduce((total, curr) => {
      return total + curr[property];
    }, 0);

  return (

      <Box sx={{ width: "100%", mb: 2, border: 1, borderColor: "grey.300" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: 1,
            borderColor: "grey.300",
            px: "10px",
            py: "10px",
          }}
        >
          <Typography sx={{ color: "grey.800", fontsize: "16px" }}>
            Ad Insights
          </Typography>
          <HelpOutlineIcon sx={{ fontsize: "small", color: "grey.300" }} />
        </Box>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <DataTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={columns}
            />
            <TableBody>
              {sortedRows.map((row) => {
                const labelId = `data-row-${row.id}`;

                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      width={5}
                      sx={{
                        pl: "10px",
                        color: "grey.500",
                        fontSize: "14px",
                        minWidth: "auto",
                        flex: "1 1 auto",
                      }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        pl: "10px",
                        color: "grey.500",
                        fontSize: "14px",
                        minWidth: "auto",
                      }}
                      align="right"
                    >
                      {row.clicks}
                    </TableCell>
                    <TableCell
                      sx={{
                        pl: "10px",
                        color: "grey.500",
                        fontSize: "14px",
                        minWidth: "auto",
                      }}
                      align="right"
                    >
                      USD {row.cost}
                    </TableCell>
                    <TableCell
                      sx={{
                        pl: "10px",
                        color: "grey.500",
                        fontSize: "14px",
                        minWidth: "auto",
                      }}
                      align="right"
                    >
                      {row.conversions}
                    </TableCell>
                    <TableCell
                      sx={{
                        pl: "10px",
                        color: "grey.500",
                        fontSize: "14px",
                        minWidth: "auto",
                      }}
                      align="right"
                    >
                      USD {row.revenue}
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow hover tabIndex={-1} sx={{ cursor: "pointer" }}>
                <TableCell
                  component="th"
                  id="total"
                  scope="row"
                  padding="none"
                  width={5}
                  sx={{
                    pl: "10px",
                    color: "grey.500",
                    fontSize: "14px",
                    minWidth: "auto",
                    flex: "1 1 auto",
                  }}
                >
                  Total
                </TableCell>
                <TableCell
                  sx={{
                    pl: "10px",
                    color: "grey.500",
                    fontSize: "14px",
                    minWidth: "auto",
                  }}
                  align="right"
                >
                  {total("clicks")}
                </TableCell>
                <TableCell
                  sx={{
                    pl: "10px",
                    color: "grey.500",
                    fontSize: "14px",
                    minWidth: "auto",
                  }}
                  align="right"
                >
                  USD {total("cost")}
                </TableCell>
                <TableCell
                  sx={{
                    pl: "10px",
                    color: "grey.500",
                    fontSize: "14px",
                    minWidth: "auto",
                  }}
                  align="right"
                >
                  {total("conversions")}
                </TableCell>
                <TableCell
                  sx={{
                    pl: "10px",
                    color: "grey.500",
                    fontSize: "14px",
                    minWidth: "auto",
                  }}
                  align="right"
                >
                  USD {total("revenue")}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
  );
}
