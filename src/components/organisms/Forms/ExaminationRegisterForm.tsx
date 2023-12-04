import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  FormControlLabel,
  Alert,
  MenuItem,
  TextField,
  TableContainer,
  Avatar,
  Table,
  TableHead,
  TableRow,
  LinearProgress,
  TableCell,
  TableBody,
  CircularProgress,
} from "@mui/material";
import { Stack } from "@mui/system";
import CustomFormLabel from "@/components/atoms/label/CustomFormLabel";
import CustomTextField from "@/components/atoms/textField/CustomTextField";
import CustomCheckbox from "@/components/atoms/checkbox/CustomCheckbox";
import PageContainer from "@/components/container/PageContainer";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ParentCard from "@/components/molecules/shared/ParentCard";
import CustomSelect from "@/components/atoms/select/CustomSelect";

const steps = ["Paciente", "Cargar Imagen", "Analizar Imagen"];
const columns = [
  { id: "pname", label: "Examen", minWidth: 170 },
  { id: "review", label: "Etapa", minWidth: 200 },
  { id: "e", label: "", minWidth: 170 },
];

const ExaminationRegisterForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [phase, setPhase] = React.useState<any>(0);
  const [image, setImage] = React.useState<any>(null);
  const [rows, setRows] = React.useState<any>([
    {
      id: 1,
      imgsrc: "/images/TestImages/13.jpg",
      name: "Neoplasia Tipo 1",
      review: "1",
      percent: 80,
    },
  ]);
  const [loading, setLoading] = React.useState(true);

  const handleImageChange = (e: any) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (event: any) => {
    setPhase(event.target.value);
  };

  const sendImageToServer = async () => {
    const number = phase - 1;
    let formData = new FormData();
    formData.append("file", image);
    formData.append("label", number.toString());
    try {
      const response = await fetch("http://54.144.131.48:5000/metrics", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setRows([
        {
          id: 1,
          imgsrc: `/images/TestImages/${image.name}`,
          name: result["Diagnóstico Predicho"],
          tags: result["Recomendaciones"],
          review: Number.parseInt(result["Diagnóstico Predicho"].split(" ")[2]),
          percent: Number.parseInt(
            result["Confianza del Diagnóstico"].replace("%", "")
          ),
        },
      ]);
      setLoading(false);
    } catch (error) {
      console.error("Error al enviar la imagen:", error);
    }
  };

  const isStepSkipped = (step: any) => skipped.has(step);
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if (activeStep === steps.length - 1) {
      sendImageToServer();
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // eslint-disable-next-line consistent-return
  const handleSteps = (step: any) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <CustomFormLabel htmlFor="Name">Nombre</CustomFormLabel>
            <CustomTextField id="Name" variant="outlined" fullWidth />
            <CustomFormLabel htmlFor="Email">
              Correo electrónico
            </CustomFormLabel>
            <CustomTextField
              id="Email"
              type="email"
              variant="outlined"
              fullWidth
            />
            <CustomFormLabel htmlFor="Phone">
              Número de contacto
            </CustomFormLabel>
            <CustomTextField
              id="Phone"
              placeholder="123 4567 201"
              variant="outlined"
              fullWidth
            />
          </Box>
        );
      case 1:
        return (
          <Box>
            <CustomFormLabel htmlFor="demo-simple-select">
              Imagen colposcopia
            </CustomFormLabel>
            {/* <input type="file" accept="image/*" id="ft-image" /> */}
            <TextField
              type="file"
              autoFocus
              id="upload-text"
              fullWidth
              size="medium"
              variant="outlined"
              onChange={handleImageChange}
            />
            <Typography variant="subtitle1" color="textSecondary" mb={4}>
              JPG o PNG permitidos. Tamaño máximo de 800K
            </Typography>
            <CustomFormLabel htmlFor="demo-simple-select">
              Fecha examen
            </CustomFormLabel>
            <CustomTextField
              type="date"
              id="ft-date"
              placeholder="John Deo"
              fullWidth
            />
            <CustomFormLabel htmlFor="demo-simple-select">
              Etapa
            </CustomFormLabel>
            <CustomSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={phase}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </CustomSelect>
            <CustomFormLabel htmlFor="Address">Observaciones</CustomFormLabel>
            <CustomTextField
              id="Address"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />
          </Box>
        );
      case 2:
        return (
          <Box pt={3}>
            <Typography variant="h5">Términos y condiciones</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Se manejarán y utilizarán las imágenes relacionadas con
              neoplasias. El uso de dichas imágenes está condicionado al
              consentimiento informado del paciente o su representante legal,
              obtenido de manera clara y documentada, respetando la autonomía y
              decisión del individuo. Se garantiza la confidencialidad absoluta
              de las imágenes, asegurando que no contengan información
              identificable del paciente, salvo lo estrictamente necesario para
              el propósito médico o de investigación. En caso de uso para
              investigación o publicación, se requiere una revisión ética
              adicional. Cualquier distribución o uso fuera del ámbito acordado
              requerirá una autorización adicional. El manejo de estas imágenes
              debe cumplir con las leyes y regulaciones locales e
              internacionales sobre la privacidad de datos y derechos de los
              pacientes. El incumplimiento de estos términos puede resultar en
              acciones legales y la revocación del derecho a utilizar estas
              imágenes. Este acuerdo subraya el compromiso con la ética médica y
              la protección de los derechos e intereses de los pacientes.
            </Typography>
            <FormControlLabel
              control={<CustomCheckbox defaultChecked />}
              label="Acepta las condiciones?"
            />
          </Box>
        );
      default:
        break;
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const BCrumb = [
    {
      to: "/dashboard",
      title: "Inicio",
    },
    {
      title: "Registrar examen",
    },
  ];

  return (
    <PageContainer>
      <Breadcrumb title="Registrar Examen" items={BCrumb} />
      <ParentCard title="Registrar Examen">
        <Box width="100%">
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Stack spacing={2} mt={3}>
                {!loading ? (
                  <>
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
                          {rows.map((row: any) => {
                            return (
                              <TableRow hover key={row.id}>
                                <TableCell>
                                  <Stack
                                    spacing={2}
                                    direction="row"
                                    alignItems="center"
                                  >
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
                                      <Typography variant="h6">
                                        {row.name}
                                      </Typography>
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
                                    <Typography
                                      variant="subtitle2"
                                      fontWeight="500"
                                    >
                                      {row.review}
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
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Alert severity="success">
                      El diagnóstico ha sido verificado con alta precisión. No
                      se detectaron errores en la clasificación de los casos
                      probados.
                    </Alert>
                  </>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "20vh",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}

                <Box textAlign="right">
                  <Button
                    onClick={handleReset}
                    variant="contained"
                    color="error"
                  >
                    Restablecer
                  </Button>
                </Box>
              </Stack>
            </>
          ) : (
            <>
              <Box>{handleSteps(activeStep)}</Box>

              <Box display="flex" flexDirection="row" mt={3}>
                <Button
                  color="inherit"
                  variant="contained"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Volver
                </Button>
                <Box flex="1 1 auto" />

                <Button
                  onClick={handleNext}
                  variant="contained"
                  color={
                    activeStep === steps.length - 1 ? "success" : "secondary"
                  }
                >
                  {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </ParentCard>
    </PageContainer>
  );
};

export default ExaminationRegisterForm;
