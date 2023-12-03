import * as React from "react";
import {
  Typography,
  Box,
  Avatar,
  Chip,
  Paper,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  LinearProgress,
} from "@mui/material";
import PageContainer from "@/components/container/PageContainer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Breadcrumb from "@/components/organisms/Breadcrumb/Breadcrumb";
import ParentCard from "@/components/molecules/shared/ParentCard";
import BlankCard from "@/components/molecules/shared/BlankCard";

function createData(
  imgsrc?: string,
  pname?: string,
  customer?: string,
  inventory?: boolean,
  items?: string
) {
  return {
    imgsrc,
    pname,
    customer,
    inventory,
    items,
    history: [
      { date: "2021-02-05", customerId: "John Deo", review: "2", percent: 50 },
      { date: "2021-02-02", customerId: "John Deo", review: "3", percent: 80 },
    ],
  };
}

function Row(props: { key?: string; row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const Capitalize = (str: any) => str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              src={row.imgsrc}
              alt={row.imgsrc}
              sx={{
                width: 90,
                height: 70,
                borderRadius: "10px",
              }}
            />
            <Typography variant="h6" fontWeight="600">
              {row.pname}
            </Typography>
          </Stack>
        </TableCell>
        <TableCell>
          <Typography color="textSecondary" variant="h6">
            {row.customer}
          </Typography>
        </TableCell>
        <TableCell>
          <Chip
            size="small"
            label={row.inventory ? "Activo" : "Inactivo"}
            color={row.inventory ? "success" : "error"}
            sx={{ borderRadius: "6px" }}
          />
        </TableCell>
        <TableCell>
          <Typography color="textSecondary" fontWeight="400">
            {row.items}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography
                gutterBottom
                variant="h5"
                sx={{
                  mt: 2,
                  backgroundColor: (theme) => theme.palette.grey.A200,
                  p: "5px 15px",
                  color: (theme) =>
                    `${
                      theme.palette.mode === "dark"
                        ? theme.palette.grey.A200
                        : "rgba(0, 0, 0, 0.87)"
                    }`,
                }}
              >
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Fecha</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Doctor</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Etapa</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow: any) => (
                    <TableRow key={historyRow.date}>
                      <TableCell>
                        <Typography color="textSecondary" fontWeight="400">
                          {historyRow.date}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textSecondary" fontWeight="400">
                          {historyRow.customerId}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Stack spacing={1}>
                          <Typography variant="subtitle2" fontWeight="500">
                            {Capitalize(historyRow.review)}
                          </Typography>
                          <LinearProgress
                            value={historyRow.percent}
                            variant="determinate"
                            color={
                              historyRow.review === "0"
                                ? "primary"
                                : historyRow.review === "1"
                                ? "success"
                                : historyRow.review === "2"
                                ? "warning"
                                : historyRow.review === "3"
                                ? "error"
                                : "secondary"
                            }
                          />
                          <Typography
                            color="textSecondary"
                            variant="subtitle2"
                            fontWeight="400"
                            whiteSpace="nowrap"
                          >
                            {historyRow.percent}%
                          </Typography>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const BCrumb = [
  {
    to: "/dashboard",
    title: "Inicio",
  },
  {
    title: "Consultar examen",
  },
];

const rows = [
  createData(
    "/images/TestImages/3.jpg",
    "2021-02-05",
    "Sunil Joshi",
    true,
    "2"
  ),
  createData("/images/TestImages/4.jpg", "2021-02-05", "Susan Deo", false, "1"),
  createData(
    "/images/TestImages/11.jpg",
    "2021-02-05",
    "Mary McDownland",
    false,
    "2"
  ),
  createData(
    "/images/TestImages/13.jpg",
    "2021-02-05",
    "Jasmine Jamil",
    true,
    "6"
  ),
];

const ConsultExaminationDoctor = () => (
  <PageContainer>
    {/* breadcrumb */}
    <Breadcrumb title="Consultar Examen" items={BCrumb} />
    {/* end breadcrumb */}
    <ParentCard title="Exámenes">
      <BlankCard>
        <TableContainer component={Paper}>
          <Table
            aria-label="consultar examen"
            sx={{
              whiteSpace: {
                xs: "nowrap",
                sm: "unset",
              },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>
                  <Typography variant="h6">Examen</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Paciente</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Estado</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Número de exámenes</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.pname} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </BlankCard>
    </ParentCard>
  </PageContainer>
);

export default ConsultExaminationDoctor;
