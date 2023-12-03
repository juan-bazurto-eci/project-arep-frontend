import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center" mt={4}>
        <Grid item xs={12} sm={5} lg={4} textAlign="center">
          <Image src={"/ml3.png"} alt="icon" width={45} height={45} />
          <Typography fontSize="16" color="textSecondary" mt={1} mb={4}>
            Todos los derechos reservados Medical Learning Group SAS.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
