import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
import ParentCard from "../shared/ParentCard";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieChart = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;
  const warning = theme.palette.warning.main;

  // 2
  const optionspiechart: any = {
    chart: {
      id: "pie-chart",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70px",
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      width: "50px",
    },
    colors: [primary, primarylight, secondary, secondarylight, warning],
    tooltip: {
      fillSeriesColor: false,
    },
  };
  const seriespiechart = [45, 15, 27, 18, 35];

  return (
    <ParentCard title="Pie Charts">
      <Chart
        options={optionspiechart}
        series={seriespiechart}
        type="pie"
        height="300px"
        width={"100%"}
      />
    </ParentCard>
  );
};

export default PieChart;
