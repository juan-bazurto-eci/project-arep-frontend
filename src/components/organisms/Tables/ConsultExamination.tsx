import {
  Typography,
  Box,
  Avatar,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Stack } from "@mui/system";
import PageContainer from "@/components/container/PageContainer";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ParentCard from "@/components/molecules/shared/ParentCard";
import BlankCard from "@/components/molecules/shared/BlankCard";

const columns = [
  { id: "pname", label: "Examen", minWidth: 170 },
  { id: "review", label: "Etapa", minWidth: 100 },
  {
    id: "earnings",
    minWidth: 170,
  },
];

const rows = [
  {
    id: 1,
    imgsrc: "/images/TestImages/2.jpg",
    name: "2021-02-05",
    tags: "DR. Andrew McDownland",
    review: "1",
    percent: 80,
    earnings: "2021-02-05",
  },
  {
    id: 2,
    imgsrc: "/images/TestImages/28.jpg",
    name: "2021-02-05",
    tags: "DR. Andrew McDownland",
    review: "2",
    percent: 60,
    earnings: "2021-02-05",
  },
  {
    id: 3,
    imgsrc: "/images/TestImages/26.jpg",
    name: "2021-02-05",
    tags: "DR. Andrew McDownland",
    review: "2",
    percent: 50,
    earnings: "2021-02-05",
  },
  {
    id: 4,
    imgsrc: "/images/TestImages/19.jpg",
    name: "2021-02-05",
    tags: "DR. Andrew McDownland",
    review: "3",
    percent: 20,
    earnings: "2021-02-05",
  },
];

const BCrumb = [
  {
    to: "/dashboard",
    title: "Inicio",
  },
  {
    title: "Consultar exámenes",
  },
];

const ConsultExamination = () => {
  const Capitalize = (str: any) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <PageContainer>
      {/* breadcrumb */}
      <Breadcrumb title="Consultar Exámenes" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title="Consultar Exámenes">
        <BlankCard>
          <TableContainer
            sx={{
              maxHeight: 440,
            }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      style={{ minWidth: column.minWidth }}
                    >
                      <Typography variant="h6" fontWeight="500">
                        {column.label}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => {
                  return (
                    <TableRow hover key={row.id}>
                      <TableCell>
                        <Stack spacing={2} direction="row" alignItems="center">
                          <Avatar
                            src={row.imgsrc}
                            alt={"row.imgsrc"}
                            sx={{
                              borderRadius: "10px",
                              height: "70px",
                              width: "90px",
                            }}
                          />
                          <Box>
                            <Typography variant="h6">{row.name}</Typography>
                            <Typography
                              color="textSecondary"
                              variant="h6"
                              mt={1}
                              fontWeight="400"
                            >
                              {row.tags}
                            </Typography>
                          </Box>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack spacing={1}>
                          <Typography variant="subtitle2" fontWeight="500">
                            {Capitalize(row.review)}
                          </Typography>
                          <LinearProgress
                            value={row.percent}
                            variant="determinate"
                            color={
                              row.review === "0"
                                ? "primary"
                                : row.review === "1"
                                ? "success"
                                : row.review === "2"
                                ? "warning"
                                : row.review === "3"
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
                            {row.percent}%
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack spacing={1}>
                          <Typography color="textSecondary" variant="subtitle2">
                            Próximo examen
                          </Typography>
                          <Typography variant="h6">{row.earnings}</Typography>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </BlankCard>
      </ParentCard>
    </PageContainer>
  );
};

export default ConsultExamination;
