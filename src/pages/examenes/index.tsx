import { Grid } from "@mui/material";
import Breadcrumb from "@/components/organisms/Breadcrumb/Breadcrumb";
import PageContainer from "@/components/container/PageContainer";
import ComplexCard from "@/components/molecules/cards/ComplexCard";
import withAuthenticationRequired from "@/hoc/withAuthenticationRequired";
import { useAuth } from "@/context/authContext";
import { arrayDestructuring } from "@/helpers/arrayDestructuring";

const BCrumb = [
  {
    to: "/dashboard",
    title: "Inicio",
  },
  {
    title: "Exámenes",
  },
];

const complexCardDoctor = [
  {
    title: "Registrar",
    href: "/examenes/registrar",
  },
  {
    title: "Consultar",
    href: "/examenes/consultar",
  },
  {
    title: "Actualizar",
    href: "/",
  },
  {
    title: "Modificar",
    href: "/",
  },
];

const complexCard = [
  {
    title: "Solicitar",
    href: "/",
  },
  {
    title: "Consultar",
    href: "/examenes/consultar",
  },
];

const ExaminationPage = () => {
  const { user } = useAuth();
  const name = user ? arrayDestructuring(user?.email?.split("@"), "") : "";
  return (
    <PageContainer>
      {/* breadcrumb */}
      <Breadcrumb title="Exámenes" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ComplexCard
            complexCard={name === "doctor" ? complexCardDoctor : complexCard}
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default withAuthenticationRequired(ExaminationPage);
