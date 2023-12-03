import React from "react";
import {
  AppBar,
  styled,
  Toolbar,
  Container,
  Box,
  Stack,
  Button,
} from "@mui/material";
import Logo from "@/components/atoms/logo/Logo";
import { useAuth } from "@/context/authContext";
import Link from "next/link";

const LpHeader = () => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      minHeight: "80px",
    },
    backgroundColor: theme.palette.background.default,
  }));

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
    color: theme.palette.text.secondary,
  }));

  const { user } = useAuth();

  return (
    <AppBarStyled position="sticky" elevation={8}>
      <Container maxWidth="lg">
        <ToolbarStyled>
          <Logo
            logo={"/images/logos/ml2.png"}
            height={90}
            width={120}
            href="/"
          />
          <Box flexGrow={1} />
          <Stack spacing={1} direction="row" alignItems="center">
            {!user ? (
              <Link href="/iniciar-sesion">
                <Button color="primary" variant="contained">
                  Iniciar Sesión
                </Button>
              </Link>
            ) : (
              <Link href="/dashboard">
                <Button color="primary" variant="contained">
                  Inicio
                </Button>
              </Link>
            )}
          </Stack>
        </ToolbarStyled>
      </Container>
    </AppBarStyled>
  );
};

export default LpHeader;
