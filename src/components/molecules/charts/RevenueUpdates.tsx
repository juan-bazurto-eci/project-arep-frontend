import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
import { MenuItem, Grid, Stack, Typography, Avatar, Box } from "@mui/material";
import { IconGridDots } from "@tabler/icons-react";
import DashboardCard from "@/components/molecules/cards/DashboardCard";
import CustomSelect from "@/components/atoms/select/CustomSelect";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RevenueUpdates = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear.toString());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  };

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: true,
      },
      height: 360,
      stacked: true,
    },
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "20%",
        borderRadius: [6],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },

    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      min: -5,
      max: 5,
      tickAmount: 4,
    },
    xaxis: {
      categories: [
        `Enero-Febrero`,
        `Marzo-Abril`,
        `Mayo-Junio`,
        `Julio-Agosto`,
        `Septiembre-Octubre`,
        `Noviembre-Diciembre`,
      ],
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart = [
    {
      name: "Consumo Urbano",
      data: [1.5, 2.7, 2.2, 3.6, 1.5, 1.0],
    },
    {
      name: "Consumo Rural",
      data: [-1.8, -1.1, -2.5, -1.5, -0.6, -1.8],
    },
  ];

  return (
    <DashboardCard
      title="Consumo"
      subtitle="Ciclo Urbano/Rural"
      action={
        <CustomSelect
          labelId="month-dd"
          id="month-dd"
          size="small"
          value={year}
          onChange={handleChange}
        >
          <MenuItem value={2020}> 2020</MenuItem>
          <MenuItem value={2021}> 2021</MenuItem>
          <MenuItem value={2022}> 2022</MenuItem>
          <MenuItem value={2023}> 2023</MenuItem>
        </CustomSelect>
      }
    >
      <Grid container spacing={3}>
        {/* column */}
        <Grid item xs={12} sm={8}>
          <Box className="rounded-bars">
            <Chart
              options={optionscolumnchart}
              series={seriescolumnchart}
              type="bar"
              height={360}
              width={"100%"}
            />
          </Box>
        </Grid>
        {/* column */}
        <Grid item xs={12} sm={4}>
          <Stack spacing={3} mt={3}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                width={40}
                height={40}
                bgcolor="primary.light"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography color="primary" variant="h6" display="flex">
                  <IconGridDots size={24} />
                </Typography>
              </Box>
              <Box>
                <Typography variant="h3" fontWeight="700">
                  12345
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Consumo Total
                </Typography>
              </Box>
            </Stack>
          </Stack>
          <Stack spacing={3} my={5}>
            <Stack direction="row" spacing={2}>
              <Avatar
                sx={{
                  width: 9,
                  mt: 1,
                  height: 9,
                  bgcolor: primary,
                  svg: { display: "none" },
                }}
              />
              <Box>
                <Typography variant="subtitle1" color="textSecondary">
                  Consumo Urbano
                </Typography>
                <Typography variant="h5">12345</Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Avatar
                sx={{
                  width: 9,
                  mt: 1,
                  height: 9,
                  bgcolor: secondary,
                  svg: { display: "none" },
                }}
              />
              <Box>
                <Typography variant="subtitle1" color="textSecondary">
                  Consumo Rural
                </Typography>
                <Typography variant="h5">12345</Typography>
              </Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default RevenueUpdates;
